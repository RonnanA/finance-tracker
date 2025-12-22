export interface Savings {
    id: string;
    userId: string;
    name: string;
    amount: number;
    frequency: "weekly" | "monthly";
    createdAt: string;
}
