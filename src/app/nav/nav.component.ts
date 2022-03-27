import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/user';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

@Output() onNewUser = new EventEmitter();
public isUserLoggedIn = false;
public username!: string;
constructor(private auth: AuthService, private router: Router) { 
auth.usersignedin.subscribe(
  (user: User) => {
    this.username = user.name;
    this.isUserLoggedIn = true;
  }
);
auth.userlogout.subscribe(
  () => {
    this.username = '';
    this.isUserLoggedIn = false;
}
);
auth.usersignedup.subscribe(
  (user : User) => {
    this.username = user.name;
    this.isUserLoggedIn = true;
}
)
}
ngOnInit() {
this.isUserLoggedIn = this.auth.isUserLoggedIn();
if(this.isUserLoggedIn){
  const user = this.auth.getUser();
  this.username = user.name;
}
  }
newUser(){
this.onNewUser.emit();
}
logout(e:any){
e.preventDefault();
this.auth.logout();
setTimeout(() => {
this.router.navigate(['login']);
}, 300);
}
signIn(e:any){
e.preventDefault();
this.router.navigate(['login']);
  }
signUp(e:any){
e.preventDefault();
this.router.navigate(['signup']);
    }
}
