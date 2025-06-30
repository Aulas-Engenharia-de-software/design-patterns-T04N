export type Item = {
  nome: string;
  descricao: string;
  qtd: number;
};

export class ClassEstoque {
  private static instance: ClassEstoque;
  private itens: Item[] = [];

  private constructor() {}

  public static getInstance(): ClassEstoque {
    if (!ClassEstoque.instance) {
      ClassEstoque.instance = new ClassEstoque();
    }
    return ClassEstoque.instance;
  }

  getItens(): Item[] {
    return this.itens;
  }

  addItem(item: Item): boolean {
    const exists = this.itens.some(i => i.nome.toLowerCase() == item.nome.toLowerCase());
    if (exists || item.nome == "" || item.qtd <= 0) return false;
    this.itens.push(item);
    return true;
  }

  updateQtd(index: number, newQtd: number) {
    if (index >= 0 && index < this.itens.length) {
      this.itens[index].qtd = newQtd;
    }
  }

  public removerItem(index: number) {
    if (index >= 0 && index < this.itens.length) {
      this.itens.splice(index, 1);
    }
  }
}