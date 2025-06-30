from abc import ABC, abstractmethod
import csv
import xml.etree.ElementTree as ET
from fpdf import FPDF  # Você precisará instalar: pip install fpdf2


# Interface Strategy
class ExportStrategy(ABC):
    @abstractmethod
    def export(self, data, filename):
        pass


# Estratégias concretas
class PDFExport(ExportStrategy):
    def export(self, data, filename):
        pdf = FPDF()
        pdf.add_page()
        pdf.set_font("Arial", size=12)
        pdf.cell(200, 10, txt="Dados Exportados:", ln=1, align='C')
        pdf.multi_cell(0, 10, txt=data)
        pdf.output(filename)
        print(f"Arquivo {filename} gerado com sucesso!")


class CSVExport(ExportStrategy):
    def export(self, data, filename):
        with open(filename, 'w', newline='') as file:
            writer = csv.writer(file)
            # Dividindo os dados em linhas
            for line in data.split('\n'):
                writer.writerow([line])
        print(f"Arquivo {filename} gerado com sucesso!")


class XMLExport(ExportStrategy):
    def export(self, data, filename):
        root = ET.Element("ExportedData")
        content = ET.SubElement(root, "Content")
        content.text = data
        tree = ET.ElementTree(root)
        tree.write(filename, encoding='utf-8', xml_declaration=True)
        print(f"Arquivo {filename} gerado com sucesso!")


# Contexto
class Exportador:
    def __init__(self, strategy: ExportStrategy = None):
        self._strategy = strategy

    def set_strategy(self, strategy: ExportStrategy):
        self._strategy = strategy

    def exportar_dados(self, data):
        if not self._strategy:
            raise ValueError("Estratégia de exportação não definida")

        # Gera um nome de arquivo baseado no tipo de exportação
        if isinstance(self._strategy, PDFExport):
            filename = "exportado.pdf"
        elif isinstance(self._strategy, CSVExport):
            filename = "exportado.csv"
        elif isinstance(self._strategy, XMLExport):
            filename = "exportado.xml"
        else:
            filename = "exportado.txt"

        self._strategy.export(data, filename)
        return filename


# Interação com usuário
def menu_exportacao():
    print("\nSelecione o formato de exportação:")
    print("1 - PDF")
    print("2 - CSV")
    print("3 - XML")
    print("0 - Sair")
    return input("Opção: ")


def main_exportacao():
    exportador = Exportador(PDFExport())  # Default

    while True:
        opcao = menu_exportacao()

        if opcao == '0':
            break
        elif opcao == '1':
            exportador.set_strategy(PDFExport())
        elif opcao == '2':
            exportador.set_strategy(CSVExport())
        elif opcao == '3':
            exportador.set_strategy(XMLExport())
        else:
            print("Opção inválida!")
            continue

        dados = input("Digite os dados a serem exportados: ")
        try:
            resultado = exportador.exportar_dados(dados)
            print(f"Arquivo gerado: {resultado}")
        except Exception as e:
            print(f"Erro ao exportar: {e}")


if __name__ == "__main__":
    print("Sistema de Exportação de Arquivos")
    print("--------------------------------")
    main_exportacao()