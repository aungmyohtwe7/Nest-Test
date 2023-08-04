import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";
import { AuthGuard } from "./auth.guard";
import { APP_GUARD } from "@nestjs/core";
import { UsersModule } from "src/user/user.module";

@Module({
    imports: [
        UsersModule,
        JwtModule.register({
            global: true,
            secret: 'process.env.SECRET_KEY',
            signOptions: {expiresIn: '60s'},
        }),
    ],
    providers: [AuthService,
        {
            provide: APP_GUARD,
            useClass: AuthGuard
          }],
    controllers: [AuthController]
})

export class AuthModule{}