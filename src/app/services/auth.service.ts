import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  loginGoogle(){
    return this.afAuth.auth.signInWithPopup ( new firebase.auth.GoogleAuthProvider());
  }

  getAuth(){
    return this.afAuth.authState.pipe(map(auth => auth));
   
  }

  logout(){
    return this.afAuth.auth.signOut();
  }

}
