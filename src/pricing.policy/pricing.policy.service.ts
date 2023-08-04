import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PricingPolicy } from './pricing.entity';

@Injectable()
export class PricingPolicyService {

    private readonly logger = new Logger(PricingPolicyService.name);
    constructor(

        @InjectRepository(PricingPolicy)
        private pricingPolicyRepository: Repository<PricingPolicy>
    ){}

    findAll(): Promise<PricingPolicy[]> {
        this.logger.log('This is findAll method')
        return this.pricingPolicyRepository.find();
    }

    findOne(productType: string): Promise<PricingPolicy | null>{
        return this.pricingPolicyRepository.findOneBy({productType});
    }
}