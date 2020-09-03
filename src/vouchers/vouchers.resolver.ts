import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { VouchersEntity } from './vouchers.entity';
import { CreateVoucherDto } from './dto/create-voucher.dto';
import { UpdateVoucherDto } from './dto/update-voucher.dto';
import { VouchersService } from './vouchers.service';
import { InputVoucher } from './inputs/voucher.input';
import { UpdateVoucher } from './inputs/updateVoucher.input';

@Resolver((of) => VouchersEntity)
export class VouchersResolver {
    constructor(private readonly vouchersService: VouchersService) {}

    @Query(() => [ CreateVoucherDto ])
    async vouchers() {
        return this.vouchersService.getVouchers();
    }

    @Query(() => CreateVoucherDto)
    async voucher(@Args('id') id: number) {
        console.log("inside voucher query is: ", id);
        const data = await this.vouchersService.getVoucher(id);
        return data;
    }

    @Mutation(() => CreateVoucherDto)
    async createVoucher(@Args('data') data: InputVoucher) {
        return this.vouchersService.createVoucher(data);
    }

    @Mutation(() => UpdateVoucherDto)
    async updateVoucher(@Args('id') id: number, @Args('data') data: UpdateVoucher) {
        return this.vouchersService.updateVoucher(id, data);
    }

    @Mutation(() => Boolean)
    async deleteVoucher(@Args('id') id: number) {
        return this.vouchersService.deleteVoucher(id);
    }
}
