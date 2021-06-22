import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private db:AngularFirestore) { }


  public save(producto:Producto){
    this.db.collection('pedido').add(producto).then(respuesta=>{
      console.log("Producto gruardado");
    }).catch(error=>{
      console.log("Se ha producido un error");
      
    });
  }
}
