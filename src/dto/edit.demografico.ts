import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class EditDemograficoDTO{
  @ApiProperty()
    readonly nombre: string; 
    readonly apellidos: string; 
    readonly correoPersonal: string; 
    readonly cedula: string;
    readonly genero: string;
    readonly fechaNacimiento: Date;
    readonly lugarNacimiento: string;
    readonly direccion: string;
    readonly municipio: string;
    readonly barrio: string;
    readonly estrato: number;
    readonly telefono: string;
    readonly tipoVivienda: string;
    readonly estadoCivil: string;
    readonly nivelFormacion: string;
    readonly tituloObtenido: string;
    readonly nombreConyuge: string;
    readonly condicionEspecial: string;
    readonly especifique: string
    // @IsString()
    // nombre:string
}