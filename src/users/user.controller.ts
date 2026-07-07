import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserService } from './user.service';
@Controller('auth')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    return this.userService.create(body.email, body.password);
  }
  @Get('/users')
  findAll() {
    return this.userService.find('anwar1@gmail.com');
  }
}
