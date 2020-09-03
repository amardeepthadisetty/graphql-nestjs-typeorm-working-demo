import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('vouchers_op_new')
export class VouchersEntity {
    @PrimaryGeneratedColumn({ name: 'id' }) id: number;

    @Column({ name: 'code' })
    code: string;

    @Column({ name: 'name' })
    name: string;

    @Column({ name: 'name_ar' })
    nameAr: string;

    @Column({ name: 'start_date' })
    startDate: string;

    @Column({ name: 'end_date' })
    endDate: string;

    @Column({ name: 'status' })
    status: string;
}
