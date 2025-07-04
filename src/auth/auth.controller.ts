import { Body, Controller, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  login(
    @Body()
    registerDto: RegisterDto,
  ) {
    return this.authService.register(registerDto);
  }
  @Post('login')
  register() {
    return this.authService.login();
  }
}
