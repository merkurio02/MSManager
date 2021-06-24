export class Producto{
    nombre:string;
    codigo:string;
    ingredientes:string[];
    editable:boolean;
    valor:number;

    iddb:string;

    constructor(){
        this.nombre="";
        this.codigo="";
        this.ingredientes=[];
        this.editable=false;
        this.valor=0;

        
    }

}