
import { Injectable } from "@nestjs/common";
import { UserDtO } from "./userDto";

@Injectable()
export class UserService {

    private readonly users = [
        {
            userId: 1,
            username: 'john',
            password: 'changeme',
          },
          {
            userId: 2,
            username: 'maria',
            password: 'guess',
          },
        ];

    async findOne(username: string) : Promise<UserDtO | undefined> {
        return this.users.find(user => user.username === username);

    }
}