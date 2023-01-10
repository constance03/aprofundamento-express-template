export enum ACCOUNT_TYPE {
    BRONZE = "Bronze",
    SILVER = "Prata",
    GOLD = "Ouro",
    PLATINUM = "Platina",
    BLACK = "Black"
}

export type TAccount = {
    id: string,
    ownerName: string,
    balance: number,
    type: ACCOUNT_TYPE
}

export type TUsuarios = { 
    id: string, 
    name: string,
    age: number
}