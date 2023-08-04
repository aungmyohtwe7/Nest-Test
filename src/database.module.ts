import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { PricingPolicy } from './pricing.policy/pricing.entity';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (ConfigService: ConfigService) => ({
                type: 'postgres',
                port: ConfigService.get('DB_PORT'),
                username: ConfigService.get('DB_USER'),
                password: ConfigService.get('DB_PASSWORD'),
                database: ConfigService.get('DB_NAME'),
                host: ConfigService.get('DB_HOST'),
                schema: ConfigService.get('DB_SCHEMA'),
                entities: [PricingPolicy],
                synchronize: false,
                ssl: {
                    rejectUnauthorized: false 
                }
            })
        })
    ],
})

export class DatabaseModule {}