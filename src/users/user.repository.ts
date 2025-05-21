import { EntityRepository, Repository } from 'typeorm';
import { User } from './entities/user.entity';

// Note : cette syntaxe fonctionne avec TypeORM <= 0.2.x
@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findByEmail(email: string): Promise<User | null> {
    return this.findOne({ where: { email } });
  }
}
