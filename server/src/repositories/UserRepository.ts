import { User } from "../domain/User";

export interface UserRepository {
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>
    create(user: User): Promise<void>;
}