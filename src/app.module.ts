import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemograficoController } from './demografico/demografico.controller';
import { DemograficoService } from './demografico/demografico.service';
import { DemograficoModule } from './demografico/demografico.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'gestiob',
      entities: [__dirname + './**/**/*entity{.ts,.js'],
      autoLoadEntities:true,
      synchronize: true,
    }),
    DemograficoModule,
    
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
