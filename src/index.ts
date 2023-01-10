import express, { Request, Response } from 'express'
import cors from 'cors'
import { accounts, users } from './database'
import { ACCOUNT_TYPE } from './types'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong!")
})

//get todos as contas
app.get("/accounts", (req: Request, res: Response) => {
    res.send(accounts)
})

//get account by id 
app.get("/accounts/:id", (req: Request, res: Response) => {
    const id = req.params.id
    const result = accounts.find((account) => account.id === id)
    res.status(200).send(result)
})

//delete account by id 
app.delete("/accounts/:id", (req: Request, res: Response) => {
    const id = req.params.id
    
    const indexToRemove = accounts.findIndex((account) => account.id === id)

    if (indexToRemove >= 0) {
        accounts.splice(indexToRemove, 1)
    }

    res.status(200).send("Item deletado com sucesso")
})

//edit account by id
app.put("/accounts/:id", (req: Request, res: Response) => {
    const id = req.params.id
    
    const newId = req.body.id as string | undefined
    const newOwnerName = req.body.ownerName as string | undefined
    const newBalance = req.body.balance as number | undefined
    const newType = req.body.type as ACCOUNT_TYPE | undefined

    const account = accounts.find((account) => account.id === id)

    if (account) {
        account.id = (newId === undefined ? account.id : newId)
        // account.id = newId || account.id
        account.ownerName = newOwnerName || account.ownerName
        account.type = newType || account.type

        //number n funciona, pq 0 é falso. isNan = is not a number? 
        account.balance = isNaN(newBalance) ? account.balance : newBalance
    }

    res.status(200).send("Atualização realizada com sucesso")
})


//fixacao
//get todos os usuarios
app.get("/users", (req: Request, res: Response) => {
    res.send(users)
})

//get user by id 
app.get("/users/:id", (req: Request, res: Response) => {
    const id = req.params.id
    const result = users.find((user) => user.id === id)
    res.status(200).send(result)
})

//delete user by id 
app.delete("/users/:id", (req: Request, res: Response) => {
    const id = req.params.id
    
    const indexToRemove = users.findIndex((user) => user.id === id)

    if (indexToRemove >= 0) {
        users.splice(indexToRemove, 1)
    }

    res.status(200).send("Item deletado com sucesso")
})

//edit user by id
app.put("/users/:id", (req: Request, res: Response) => {
    const id = req.params.id
    
    const newId = req.body.id as string | undefined
    const newName = req.body.name as string | undefined
    const newAge = req.body.age as number | undefined

    const user = users.find((user) => user.id === id)

    if (user) {
        user.id = (newId === undefined ? user.id : newId)
        // user.id = newId || user.id
        user.name = newName || user.name
        //number n funciona, pq 0 é falso. isNan = is not a number? 
        user.age = isNaN(newAge) ? user.age : newAge
    }

    res.status(200).send("Atualização realizada com sucesso")
})