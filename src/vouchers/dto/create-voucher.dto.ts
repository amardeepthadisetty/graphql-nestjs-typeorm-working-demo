import { Field, ObjectType} from 'type-graphql';

@ObjectType()
export class CreateVoucherDto {
    @Field() readonly id?: number;
    @Field() readonly code: string;
    @Field() readonly name: string;
    @Field() readonly nameAr: string;
    @Field() readonly startDate: string;
    @Field() readonly endDate: string;
    @Field() readonly status: string;
}
