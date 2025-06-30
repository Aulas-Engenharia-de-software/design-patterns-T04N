// 2. Crie Strategy para alternar entre formatos de exportação (PDF, CSV, XML).
interface ExportStrategy {
  export(data: unknown): string;
}

class PdfExporter implements ExportStrategy {
  export(data: unknown) {
    return `PDF<${JSON.stringify(data)}>`;
  }
}

class CsvExporter implements ExportStrategy {
  export(data: unknown) {
    const rows = data as Record<string, any>[];
    const head = Object.keys(rows[0]).join(",");
    const body = rows.map((r) => Object.values(r).join(",")).join("\n");
    return `${head}\n${body}`;
  }
}

class XmlExporter implements ExportStrategy {
  export(data: unknown) {
    const obj = data as Record<string, any>;
    return `<root>${Object.entries(obj)
      .map(([k, v]) => `<${k}>${v}</${k}>`)
      .join("")}</root>`;
  }
}

type Format = "pdf" | "csv" | "xml";
const strategies: Record<Format, ExportStrategy> = {
  pdf: new PdfExporter(),
  csv: new CsvExporter(),
  xml: new XmlExporter(),
};

export function exportData(format: Format, data: unknown): string {
  return strategies[format].export(data);
}
//exemplo
const items = [
  { id: 1, name: "Ana" },
  { id: 2, name: "Analice" },
];
console.log(exportData("csv", items));
