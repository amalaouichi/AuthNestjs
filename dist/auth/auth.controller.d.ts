import { AuthService } from './auth.service';
import { Response } from 'express';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(createAuthDto: CreateAuthDto): Promise<{
        message: string;
    }>;
    login(loginDto: LoginDto, res: Response): Promise<{
        message: string;
    }>;
    logout(response: Response): {
        message: string;
    };
}
