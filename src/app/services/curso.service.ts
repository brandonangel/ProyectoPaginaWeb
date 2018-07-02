import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database'
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  cursosList: AngularFireList<any>;
  selectCurso: Curso=new Curso();


  constructor(private firebase:AngularFireDatabase) { }

  getProfesores(){
    return this.cursosList=this.firebase.list('profesores');
  }

  insertprofesor(curso: Curso){
    this.cursosList.push(
      {
        nombre: curso.nombre,
        codigo: curso.codigo,
        horas: curso.horas,
      });
  }

  updateProfesor(curso:Curso){
    this.cursosList.update(curso.$key,{
        nombre: curso.nombre,
        codigo: curso.codigo,
        horas: curso.horas,
    })
  }

  deleteProfesor($key: string){
    this.cursosList.remove($key);
  }
}
