import { Controller, Post, Body, Get, Param } from '@nestjs/common';
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
  @Get('/users/:id')
  findUser(@Param('id') id: number) {
    return this.userService.findOne(id);
  }
}
