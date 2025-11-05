import { Injectable } from '@nestjs/common';
import { user } from './user.interface';

@Injectable()
export class UserService {
  private readonly users = [];

  create(users: user) {
    this.users.push();
  }
  finAll(): string[] {
    return this.users;
  }
}
