export type AccountType = 
    | "checking"
    | "savings"
    | "credit"
    | "tfsa"
    | "resp"
    | "rrsp"
    | "fhsa"
    | "other";

export interface Account {
    id: string;
    userId: string;
    name: string;
    type: AccountType;
    balance: number;
    createdAt: string;
}