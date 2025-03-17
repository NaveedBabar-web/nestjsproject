import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'John Doe', description: 'Full name of the user' })
  name: string;

  @ApiProperty({ example: 'john@example.com', description: 'Unique email address' })
  email: string;

  @ApiProperty({ example: 'password123', description: 'User password' })
  password: string;
}
