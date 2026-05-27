class Item {
  constructor(public title: string) { }
}

class TodoList {
  private itens: Item[] = [];
  private filePath: string;

  constructor(filePath: string) {
    this.filePath = filePath;
    this.loadListFromDisk()
  }

  private async saveListToDisk() {
    const file = Bun.file(this.filePath);
    const data = JSON.stringify(this.itens);
    await file.write(data);
  }

  private async loadListFromDisk(){
    const file = Bun.file(this.filePath)
    const data = await file.json()
    this.itens = data.map((v: any) => new Item(v.title))
  }  
  
  /**
   * função que adiciona um item
   */
  async addItem(item: Item) {
    this.itens.push(item)
    await this.saveListToDisk()
  }
  /**
   * função que remove um item
   */
  async removeItem(index: number) {
    this.itens.splice(index, 1);
    await this.saveListToDisk()
  }
  /**
   * função que retorna a copia dos itens
   */
  getItems() {
    return [...this.itens]
  }
}


const lista = new TodoList('arquivo.txt')
lista.addItem(new Item("comprar abacate"))
lista.addItem(new Item("aprender javascript"))
lista.removeItem(1)
lista.addItem(new Item("aprender typescript"))
console.log(lista.getItems())