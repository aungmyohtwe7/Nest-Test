import { Body, Controller, Get, Param, Post } from "@nestjs/common/decorators";
import { PricingPolicyService } from "./pricing.policy.service";
import { PricingPolicy } from "./pricing.entity";

@Controller('pricing-policy-config')
export class PricingPolicyController {

    constructor(private readonly pricingPolicyService: PricingPolicyService){}

    @Get()
    async getAllPricingPolicy(): Promise<PricingPolicy[]> {
        return this.pricingPolicyService.findAll();
    }

    @Get(':productName')
    async getPricingPolicyByProductName(@Param('productName') productName: string): Promise<PricingPolicy> {
        return this.pricingPolicyService.findOne(productName);
    }
}