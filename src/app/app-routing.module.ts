import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfesorListComponent } from './profesores/profesor-list/profesor-list.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { ContenidoComponent } from './contenido/contenido.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path: '', component: ContenidoComponent},
  {path:'login',component:LoginComponent},
  {path:'profesores',component:ProfesoresComponent,canActivate:[AuthGuard]},
  {path:'admin',component:AdminComponent,canActivate:[AuthGuard]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
