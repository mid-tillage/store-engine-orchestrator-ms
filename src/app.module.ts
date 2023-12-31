import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SaleModule } from './sale/sale.module';
import { ManagementModule } from './management/management.module';

@Module({
  imports: [
    SaleModule,
    ManagementModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
