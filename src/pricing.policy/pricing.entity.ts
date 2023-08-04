import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity("pricing_policy_mapping")
export class PricingPolicy {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "pricing_policy_config"})
    pricingPolicyConfig: string;

    @Column({name:"product_type"})
    productType: string;

    @Column({name:"created_date"})
    createdDate: Date;

    @Column({name:"updated_date"})
    updatedDate: Date;

    @Column({name:"version"})
    version: number;
}