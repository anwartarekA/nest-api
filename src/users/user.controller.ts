import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class UserController {
  @Post('/signup')
  createUser(@Body() body: createUserDto) {
    console.log(body);
  }
}
