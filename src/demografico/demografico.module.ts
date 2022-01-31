import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DemograficoController } from './demografico.controller';
import { Demografico } from './demografico.entity';
import {DemograficoService} from './demografico.service';
;


@Module({
    imports:[
        TypeOrmModule.forFeature([Demografico

        ])
    ],
    controllers:[DemograficoController],
    providers:[DemograficoService]
    
})
export class DemograficoModule {}
