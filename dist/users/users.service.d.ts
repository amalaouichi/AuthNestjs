import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
    create(user: Partial<User>): Promise<User>;
    remove(id: number): Promise<void>;
    findone(id: number): Promise<User>;
    update(id: number, user: Partial<User>): Promise<User>;
}
