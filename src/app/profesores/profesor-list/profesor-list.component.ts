import { Component, OnInit } from '@angular/core';
import { Profesor } from '../../models/profesor';
import { ProfesorService } from '../../services/profesor.service';
import { element } from 'protractor';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profesor-list',
  templateUrl: './profesor-list.component.html',
  styleUrls: ['./profesor-list.component.css']
})
export class ProfesorListComponent implements OnInit {
  profesorList: Profesor[];

  constructor(private profesorService:ProfesorService,private toastr: ToastrService) { }

  ngOnInit() {
    return this.profesorService.getProfesores()
    .snapshotChanges().subscribe(item=>{
      this.profesorList=[];
      item.forEach(element=>{
        let x=element.payload.toJSON();
        x["$key"]=element.key;
        this.profesorList.push(x as Profesor);
      });
    });
  }

  onEdit(profesor: Profesor) {
    this.profesorService.selectProfesor = Object.assign({}, profesor);
  }

  onDelete($key: string) {
    if(confirm('¿Estas seguro que deseas elimiar este Profesor?')) {
      this.profesorService.deleteProfesor($key);
      this.toastr.warning('Registro eliminado correctamente...', 'Product Removed');
    }
  }

}
