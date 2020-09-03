import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VouchersEntity } from './vouchers.entity';
import { Repository } from 'typeorm';
import { CreateVoucherDto } from './dto/create-voucher.dto';
import { UpdateVoucherDto } from './dto/update-voucher.dto';

@Injectable()
export class VouchersService {
    constructor(@InjectRepository(VouchersEntity) private readonly VouchersRepository: Repository<VouchersEntity>) {}

    async createVoucher(data: CreateVoucherDto): Promise<VouchersEntity> {
        const voucher = new VouchersEntity();
        voucher.code = data.code;
        voucher.name = data.name;
        voucher.nameAr = data.nameAr;
        voucher.startDate = data.startDate;
        voucher.endDate = data.endDate;
        voucher.status = data.status;

        await this.VouchersRepository.save(voucher);

        return voucher;
    }

    async getVouchers() {
        return await this.VouchersRepository.find();
    }

    async getVoucher(id: number) {
        return await this.VouchersRepository.findOne({ where: { id } });
    }

    async updateVoucher(id: number, data: UpdateVoucherDto) {
        const voucher = await this.VouchersRepository.findOne({ where: { id } });
        if (!voucher) {
            throw new Error('Book not found!');
        }
        Object.assign(voucher, data);
        await this.VouchersRepository.save(voucher);
        return voucher;
    }

    async deleteVoucher(id: number) {
        const voucher = await this.VouchersRepository.findOne({ where: { id } });
        if (!voucher) {
            throw new Error('Book not found!');
        }
        await this.VouchersRepository.delete(id);
        return true;
    }
}
