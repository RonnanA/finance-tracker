import { Session } from "../domain/Session";

export interface SessionRepository {
    findById(id: string): Promise<Session | null>;
    findByUserId(userId: string): Promise<Session[]>;
    create(session: Session): Promise<void>;
    delete(id: string): Promise<void>;
}