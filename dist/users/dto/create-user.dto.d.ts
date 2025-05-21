import { UserRole } from '../entities/user.entity';
export declare class CreateUserByAdminDto {
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly password: string;
    readonly role: UserRole;
}
