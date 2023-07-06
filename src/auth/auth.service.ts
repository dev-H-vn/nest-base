import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  private readonly users: any[] = [];

  create(user) {
    this.users.push(user);
  }

  findAll(): any[] {
    return this.users;
  }
}
