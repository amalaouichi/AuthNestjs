export declare enum UserRole {
    ADMIN = "admin",
    USER = "user"
}
export declare class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    role: UserRole;
    password: string;
    refreshToken: string;
    createdAt: Date;
    updatedAt: Date;
}
