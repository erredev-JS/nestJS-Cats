import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './auth.guard';

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
  register(
    @Body()
    loginDto: LoginDto
  ) {
    return this.authService.login(loginDto)
  }
  @Get('profile')
  @UseGuards(AuthGuard)
  profile(@Request() req){
    return req.user
  }
}
