import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database'
import { Profesor } from '../models/profesor';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  profesoresList: AngularFireList<any>;
  selectProfesor: Profesor=new Profesor();

  constructor(private firebase:AngularFireDatabase) {}

  getProfesores(){
    return this.profesoresList=this.firebase.list('profesores');
  }

  insertprofesor(profesor: Profesor){
    this.profesoresList.push(
      {
        nombre: profesor.nombre,
        apellido: profesor.apellido,
        celular: profesor.celular,
        email: profesor.email
      });
  }

  updateProfesor(profesor:Profesor){
    this.profesoresList.update(profesor.$key,{
      nombre: profesor.nombre,
        apellido: profesor.apellido,
        celular: profesor.celular,
        email: profesor.email
    })
  }

  deleteProfesor($key: string){
    this.profesoresList.remove($key);
  }
  
}
