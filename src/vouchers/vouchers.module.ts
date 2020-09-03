import { VouchersResolver } from './vouchers.resolver';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VouchersEntity } from './vouchers.entity';
import { VouchersService } from './vouchers.service';

@Module({
    imports: [ TypeOrmModule.forFeature([ VouchersEntity ]) ],
    providers: [ VouchersResolver, VouchersService ],
})
export class VouchersModule {}
