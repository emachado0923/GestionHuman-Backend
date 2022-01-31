import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Demografico {

    @PrimaryGeneratedColumn()
    id:number;
    @Column({type:'varchar', length:50})
    nombre: string;
    @Column({type:'varchar', length:50}) 
    apellidos: string; 
    @Column({type:'varchar', length:50})
    correoPersonal: string; 
    @Column({type:'varchar', length:30})
    cedula: string;
    @Column({type:'varchar', length:20})
    genero: string;
    @CreateDateColumn({type:'timestamp'})
    fechaNacimiento: Date;
    @Column({type:'varchar', length:50})
    lugarNacimiento: string;
    @Column({type:'varchar', length:50})
    direccion: string;
    @Column({type:'varchar', length:50})
    municipio: string;
    barrio: string;
    @Column({type:'varchar', length:50})
    estrato: number;
    @Column({type:'varchar', length:50})
    telefono: string;
    @Column({type:'varchar', length:50})
    tipoVivienda: string;
    @Column({type:'varchar', length:50})
    estadoCivil: string;
    @Column({type:'varchar', length:50})
    nivelFormacion: string;
    @Column({type:'varchar', length:50})
    tituloObtenido: string;
    @Column({type:'varchar', length:50})
    nombreConyuge: string;
    @Column({type:'varchar', length:50})
    condicionEspecial: string;
    @Column({type:'varchar', length:50})
    especifique: string;
    @CreateDateColumn({type:'timestamp'})
    create: Date;
}