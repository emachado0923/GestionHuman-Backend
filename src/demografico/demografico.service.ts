import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EditDemograficoDTO } from 'src/dto/edit.demografico';
import { Repository } from 'typeorm';
import {CreateDemograficosDTO} from '../dto/create.demografico.dto';
import {Demografico} from './entities/demografico.entity';




@Injectable()
export class DemograficoService {

    constructor(@InjectRepository(Demografico)
        private readonly demograficoRepository:Repository<Demografico>){}

    getEmpleados():Promise<Demografico[]>{
        return this.demograficoRepository.find();
    }
    async getEmpleado(id:number){
        const empleado=await this.demograficoRepository.findOne(id)
        if (!empleado) throw  new NotFoundException('Empleado No Existe');
        return empleado;
    }
    async editEmpleado(id:number, dto:EditDemograficoDTO){
        const empleado=await this.demograficoRepository.findOne(id);
        if(!empleado) throw new NotFoundException('Empleado No Encontrado');
        const empleadoEditado=Object.assign(empleado,dto);
        return await this.demograficoRepository.save(empleadoEditado);
        return empleadoEditado;
    }
    async deleteEmpleado(id:number){
        return await this,this.demograficoRepository.delete(id);
        
    }
    async createEmpleado(dto:CreateDemograficosDTO){
        const empleado=this.demograficoRepository.create(dto);
        return await this.demograficoRepository.save(empleado);
    }
}
