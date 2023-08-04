import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PricingPolicy } from './pricing.entity';
import { PricingPolicyController } from './pricing.policy.controller';
import { PricingPolicyService } from './pricing.policy.service';

@Module({
    imports: [TypeOrmModule.forFeature([PricingPolicy])],
    providers: [PricingPolicyService],
    controllers: [PricingPolicyController],
  })
  export class PricingPolicyModule {}