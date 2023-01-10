import { ACCOUNT_TYPE, TAccount, TUsuarios } from "./types";

export const accounts: TAccount[] = [
    {
        id: "a001",
        ownerName: "Ciclano",
        balance: 10000,
        type: ACCOUNT_TYPE.GOLD
    },
    {
        id: "a002",
        ownerName: "Astrodev",
        balance: 500000,
        type: ACCOUNT_TYPE.BLACK
    },
    {
        id: "a003",
        ownerName: "Fulana",
        balance: 20000,
        type: ACCOUNT_TYPE.PLATINUM
    }
]

export const users : TUsuarios[] = [
    {
        id: "01", 
        name: "Maria",
        age: 25
    }, 
    {
        id: "02", 
        name: "Fulano",
        age: 45
    }
]