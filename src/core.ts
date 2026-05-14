class Item {
  constructor(public item: string) { }
}

class TodoList {
  private itens: Item[] = [];
  private filePath: string;

  constructor(filePath: string) {
    this.filePath = filePath;
  }

  addItem(item: Item) {
    this.itens.push(item)
  }

  removeItem(index: number) {
    this.itens.splice(index, 1);
  }

  getItems() {
    return this.itens
  }
}


const lista = new TodoList('arquivo.txt')
lista.addItem(new Item("comprar abacate"))
lista.addItem(new Item("aprender javascript"))
lista.removeItem(1)
lista.addItem(new Item("aprender typescript"))
console.log(lista.getItems())