import { Component, OnInit } from '@angular/core';
import { ProfesorService } from '../../services/profesor.service';
import { Profesor } from '../../models/profesor';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profesor-add',
  templateUrl: './profesor-add.component.html',
  styleUrls: ['./profesor-add.component.css']
})
export class ProfesorAddComponent implements OnInit {

  constructor(private profesorService: ProfesorService,private toastr: ToastrService) { }

  ngOnInit() {
    this.profesorService.getProfesores();
    this.resetForm();
  }

  onSubmit(profesorForm: NgForm){
    if(profesorForm.value.$key == null){
      this.profesorService.insertprofesor(profesorForm.value);
    }else{
      this.profesorService.updateProfesor(profesorForm.value);
    }
    this.resetForm(profesorForm);
    this.toastr.success('Operación realizada con éxito', 'Product Registered');
  }

  resetForm(profesorForm?: NgForm){
    if(profesorForm != null)
      profesorForm.reset();
      this.profesorService.selectProfesor = new Profesor();
  }
}
