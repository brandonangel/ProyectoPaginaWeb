import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userNombre : string;
  userEmail: string;
  userPicture: string;
  userId: string;
  isLogin: boolean; 

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit() {
    this.authService.getAuth().subscribe( auth => {
      if(auth){
        this.isLogin=true;
        this.userNombre = auth.displayName;
        this.userEmail = auth.email;
        this.userPicture = auth.photoURL;
        this.userId = auth.uid;
      }else{
        this.isLogin= false;
      }
    })
  }

  onLogout(){
    this.authService.logout();
  }
}
