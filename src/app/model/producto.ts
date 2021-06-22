export class Producto{
    nombre:string;
    codigo:string;
    ingredientes:string[];
    modificable:boolean;
    valor:number;


    constructor(){
        this.nombre="";
        this.codigo="";
        this.ingredientes=[];
        this.modificable=false;
        this.valor=0;

        
    }

}