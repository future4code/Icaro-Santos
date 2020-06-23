import * as fs from 'fs'

const tarefa: string = process.argv[2]

try {
    fs.appendFileSync("tarefas.txt", `\n${tarefa}`, 'utf8')
    console.log("Tarefa inserida com sucesso")
} catch (err) {
    console.error(err)
}
