import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Ingrediente } from '../model/ingrediente'


@Injectable({
  providedIn: 'root'
})
export class IngredientesService {

  private ingredientes: Ingrediente[] = new Array<Ingrediente>();
  constructor(private db: AngularFirestore) {
    this.actualizarIngredientes();


  }

  private actualizarIngredientes() {
    this.ingredientes.length = 0;
    this.db.collection('ingredientes').get().subscribe(data => {
      data.forEach(elemento => {

        let ingrediente: Ingrediente = elemento.data() as Ingrediente;
        ingrediente.id = elemento.id;
        this.ingredientes.push(ingrediente);

      })
    })
  }

  save(ingrediente: Ingrediente) {
    this.db.collection('ingredientes').add(ingrediente).then(respuesta => {
      console.log('Ingrediente guardado');
      this.actualizarIngredientes();
    }).catch(error => {
      console.log(error);

    })

  }

  getAll(): Ingrediente[] {
    return this.ingredientes;
  }


  update(ingrediente: Ingrediente, id: string) {
    this.db.doc('ingredientes/' + id).update(ingrediente).then(respuesta => {
      console.log('logrado');
      this.actualizarIngredientes();
    }).catch(error => {
      console.log(error);

    })


  }





}
