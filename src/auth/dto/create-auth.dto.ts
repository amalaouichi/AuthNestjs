import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  IsAlpha,
} from 'class-validator';

export class CreateAuthDto {
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
}
