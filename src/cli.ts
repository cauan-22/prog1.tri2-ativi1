// CLI: Command Line Interface
// import TodoListClass from "./core"
// import { Item, TodoList } from "./core"
// import { Item as Item1, TodoList as TodoList1 } from "./core"

import TodoListClass, { Item } from "./core"

const todolist = new TodoListClass("todolist.json")
const params = process.argv
const command = params[2]

// ------------------------------------------------------------------------------
// --- Comando Add
// ------------------------------------------------------------------------------

if (command === "add") {
    const value = params[3]

    if (!value) {
        console.error("Valor do item é obrigatório")
        process.exit(1)
    }

    try {
        await todolist.addItem(new Item(value))
    } catch (error) {
        console.error("Erro ao adicionar item:", error)
        process.exit(1)
    }

    console.log(`Item "${value}" adicionado com sucesso!`)
    process.exit(0)
}

// ------------------------------------------------------------------------------
// --- Fallback para comandos não reconhecidos
// ------------------------------------------------------------------------------

if (command)
    console.log(`Comando não reconhecido: ${command}`)

console.log(`Comandos disponíveis:
- add <item>: Adiciona um item à lista
- remove <index>: Remove um item da lista por indice
- list: Lista os itens atuais
`)