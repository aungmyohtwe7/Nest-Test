import { IsNotEmpty } from 'class-validator';


export class UserDtO {

    userId: number;

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string
}