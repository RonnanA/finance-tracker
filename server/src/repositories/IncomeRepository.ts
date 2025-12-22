import { Income } from "../domain/Income";

export interface IncomeRepository {
    findByUserId(userId: string): Promise<Income[]>;
    create(income: Income): Promise<void>;
    delete(id: string): Promise<void>;
}
