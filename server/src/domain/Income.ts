export type IncomeFrequency =
    | "one-time"
    | "weekly"
    | "bi-weekly"
    | "monthly"
    | "yearly";

export interface Income {
    id: string;
    userId: string;
    source: string;
    amount: number;
    frequency: IncomeFrequency;
    startDate: string;
    endDate?: string;
}
