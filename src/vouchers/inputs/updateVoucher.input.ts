import { Field, InputType } from 'type-graphql';

@InputType()
export class UpdateVoucher {
    @Field({ nullable: true }) readonly code?: string;
    @Field({ nullable: true }) readonly name?: string;
    @Field({ nullable: true }) readonly nameAr?: string;
    @Field({ nullable: true }) readonly startDate?: string;
    @Field({ nullable: true }) readonly endDate?: string;
    @Field({ nullable: true }) readonly status?: string;
}
