import { Account } from "../domain/Account";

export interface AccountRepository {
    findById(id: string): Promise<Account | null>;
    findByUserId(userId: string): Promise<Account[]>;
    create(account: Account): Promise<void>;
    update(account: Account): Promise<void>;
    delete(id: string): Promise<void>;
}
