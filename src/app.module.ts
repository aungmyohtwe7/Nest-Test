import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database.module';
import { PricingPolicyModule } from './pricing.policy/pricing.policy.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), DatabaseModule, PricingPolicyModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
