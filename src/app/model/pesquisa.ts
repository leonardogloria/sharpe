import {Input } from '@angular/core';


export class Pesquisa{
    hash:string;             
    ativo:boolean
    @Input()    nome:string;
    @Input()    email:string;
    @Input()    curso:string;
    @Input()    nota:number;
    @Input()    comentario:string;

}