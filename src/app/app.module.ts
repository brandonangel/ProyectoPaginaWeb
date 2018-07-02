import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFirestoreModule, AngularFirestore} from 'angularfire2/firestore';
import { environment } from '../environments/environment';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { ProfesorListComponent } from './profesores/profesor-list/profesor-list.component';
import { ProfesorAddComponent } from './profesores/profesor-add/profesor-add.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ProfesorService } from './services/profesor.service';

import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { AuthService } from './services/auth.service';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContenidoComponent } from './contenido/contenido.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfesoresComponent,
    ProfesorListComponent,
    ProfesorAddComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    AdminComponent,
    NotFoundComponent,
    ContenidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //Formularios
    HttpModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), //Conexion Firebase
    AngularFireAuthModule, //Autentificaion con Firebase
    AngularFireDatabaseModule,
    CommonModule,//Toastr: mensajes emergentes
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ProfesorService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
