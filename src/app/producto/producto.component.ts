import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Ingrediente } from '../model/ingrediente';
import { Producto } from '../model/producto';
import { IngredientesService } from '../services/ingredientes.service';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  formulario: FormGroup;
  ingredientes: Ingrediente[];
  updating=false;

  constructor(private fb: FormBuilder, private iservice: IngredientesService, private pService:ProductosService) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      codigo: ['', Validators.required],
      ingredientes:  new FormArray([]),
      editable: [true],
      valor: ['0', Validators.required]
    });
    

    this.obtenerIngredientes();
  }


  obtenerIngredientes() {
    this.ingredientes = this.iservice.getAll();
  }

  guardar() {
    let producto:Producto=this.formulario.value as Producto;

    console.log(producto);




  }

  update(){

  }
  umh(){
    console.log("pressed");
    
  }


  onCheckChange(event) {
    let ingredient: FormArray = this.formulario.get('ingredientes') as FormArray;
   
    
    if (event.target.checked) {
      ingredient.push(new FormControl(event.target.value));
      
    }else{
      let i: number = 0;
      ingredient.controls.forEach((item: FormControl) => {
        
        if (item.value == event.target.value) {
          ingredient.removeAt(i);
          return;
        }
        i++;
      })
    }
  }

}
