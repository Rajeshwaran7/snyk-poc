import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dtos/users.dto';

@Injectable()
export class UsersService {
  private readonly users = new Map<string, any>();

  create(createUserDto: CreateUserDto) {
    const id = Math.random().toString();
    this.users.set(id, { id, ...createUserDto });
    return { id, ...createUserDto };
  }

  findAll() {
    return Array.from(this.users.values());
  }

  findOne(id: string) {
    const user = this.users.get(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const user = this.users.get(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    this.users.set(id, { ...user, ...updateUserDto });
    return this.users.get(id);
  }

  remove(id: string) {
    const user = this.users.get(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    this.users.delete(id);
    return { message: 'User removed' };
  }
}
