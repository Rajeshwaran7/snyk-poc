import { Injectable } from '@nestjs/common';
import { LoginDto, RegisterDto } from './dtos/auth.dto';

@Injectable()
export class AuthService {
  async register(registerDto: RegisterDto) {
    // Add registration logic, e.g., hashing passwords and saving users
    return { message: 'User registered successfully' ,};
  }

  async login(loginDto: LoginDto) {
    // Add login logic, e.g., validating user credentials and generating tokens
    return { token: 'JWT_TOKEN' };
  }
}
