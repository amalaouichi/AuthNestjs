import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
  IsAlpha,
} from 'class-validator';
import { UserRole } from '../entities/user.entity';

export class CreateUserByAdminDto {
  @IsNotEmpty()
  @IsString()
  @IsAlpha()
  readonly firstName: string;

  @IsNotEmpty()
  @IsString()
  @IsAlpha()
  readonly lastName: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;

  @IsEnum(UserRole)
  readonly role: UserRole;
}
