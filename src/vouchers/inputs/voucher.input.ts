import { Field, InputType } from 'type-graphql';

@InputType()
export class InputVoucher {
    @Field() readonly code: string;
    @Field() readonly name: string;
    @Field() readonly nameAr: string;
    @Field() readonly startDate: string;
    @Field() readonly endDate: string;
    @Field() readonly status: string;
}
