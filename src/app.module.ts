import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import { UsersModule } from './users/users.module';
import { ChanclasModule } from './chanclas/chanclas.module';
import { TiendasModule } from './tiendas/tiendas.module';
import { ProductosModule } from './productos/productos.module';

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password : 'password',
          database: 'testnest',
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: true,
      }),
      UsersModule,
      ChanclasModule,
      TiendasModule,
      ProductosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
