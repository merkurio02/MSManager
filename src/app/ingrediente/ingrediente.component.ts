import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ingrediente } from '../model/ingrediente';
import { IngredientesService } from '../services/ingredientes.service';

@Component({
  selector: 'app-ingrediente',
  templateUrl: './ingrediente.component.html',
  styleUrls: ['./ingrediente.component.css']
})
export class IngredienteComponent implements OnInit {

  public ingredientes:Ingrediente[]= new Array<Ingrediente>();
  updateIngrediente:Ingrediente;
  updating:boolean=false;

  formulario:FormGroup;
  constructor(private iService:IngredientesService, private fb:FormBuilder) { }

  ngOnInit(): void {


    
    this.getAll();
    this.formulario=this.fb.group({
      nombre:['',Validators.required],
      valor:['0',Validators.required],
      codigo:['',Validators.required]
    })
     
  }

  getAll(){
    this.ingredientes=this.iService.getAll();
  }

  guardar(){
    let ing:Ingrediente=new Ingrediente();
    this.iService.save(this.formulario.value as Ingrediente);
    this.getAll();
    this.formulario.reset();
  }
  setFormulario(ingrediente:Ingrediente){
    this.updateIngrediente=ingrediente;
    this.updating=true;
    this.formulario.setValue({
      nombre:ingrediente.nombre,
      codigo:ingrediente.codigo,
      valor:ingrediente.valor

    })
  }

 update(){
   
  this.iService.update(this.formulario.value,this.updateIngrediente.id)
   
 }



}
