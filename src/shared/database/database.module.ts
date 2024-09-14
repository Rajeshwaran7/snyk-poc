import { Module } from "@nestjs/common";
import { UsersService } from "../../modules/users/users.service";
@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
    providers: [UsersService],
    exports: [UsersService],
  })
  export class UsersModule {}
  