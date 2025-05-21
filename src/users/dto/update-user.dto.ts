import { PartialType } from '@nestjs/mapped-types';
import { CreateUserByAdminDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserByAdminDto) {}
