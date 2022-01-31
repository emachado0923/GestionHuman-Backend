import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import {  ApiTags } from '@nestjs/swagger';
import { CreateDemograficosDTO } from 'src/dto/create.demografico.dto';
import { EditDemograficoDTO } from 'src/dto/edit.demografico';
import { DemograficoService } from './demografico.service';


@ApiTags('demografico')
@Controller('demografico')
export class DemograficoController {

    constructor(private demograficoService:DemograficoService){}

    @Get()
    async getEmpleados(){
        const data = await this.demograficoService.getEmpleados()
        return {
            message:'Peticion Correcta',
            data
        }
        
    }

    @Get(':id')
    getEmpleado(@Param('id', ParseIntPipe)id:number){
        return this.demograficoService.getEmpleado(id);
    }



    @Post()
    createDemografico(
         @Body() dto:CreateDemograficosDTO){
        return this.demograficoService.createEmpleado(dto)
    }
    
    


    @Put(':id')
    editOne(@Param('id') id:number, 
    @Body()dto:EditDemograficoDTO){
        return this.demograficoService.editEmpleado(id,dto);
    }


    @Delete(':id')
    deleteOne(@Param('id') id:number){
        return this.demograficoService.deleteEmpleado(id)
    }
}
