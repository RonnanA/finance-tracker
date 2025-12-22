import { Goal } from "../domain/Goals";

export interface GoalRepository {
    findByUserId(userId: string): Promise<Goal[]>;
    findById(id: string): Promise<Goal | null>;
    create(goal: Goal): Promise<void>;
    update(goal: Goal): Promise<void>;
    delete(id: string): Promise<void>;
}
