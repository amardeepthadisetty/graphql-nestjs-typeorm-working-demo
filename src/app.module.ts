import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { VouchersModule } from './vouchers/vouchers.module';
@Module({
    imports: [
        TypeOrmModule.forRoot(),
        GraphQLModule.forRoot({
            autoSchemaFile: 'schema.gpl',
        }),
        VouchersModule,
    ],
    controllers: [ AppController ],
    providers: [ AppService ],
})
export class AppModule {}
