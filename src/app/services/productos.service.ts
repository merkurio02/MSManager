import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos:Producto[]= new Array<Producto>();

  constructor(private db:AngularFirestore) { 
    this.getData();
  }

  public getAll(){
    return this.productos;
  }

  private getData(){
    this.productos.length=0;
    this.db.collection('productos').get().subscribe(elemento=>{
      elemento.forEach(producto=>{
        let prod:Producto= producto.data() as Producto;
        prod.iddb=producto.id;
        
        this.productos.push(prod);
      })
    })
    console.log(this.productos);
    
  }

  public save(producto:Producto){
    this.db.collection('productos').add(producto).then(respuesta=>{
      console.log("Producto gruardado");
    }).catch(error=>{
      console.log("Se ha producido un error");
      
    });

    this.getData();

  }
}
