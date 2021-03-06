import { Component, Input, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';



@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private userCopy: User = new User;
  private __user: User = new User;
  
  @Input() set user(user: User){
    this.__user = user;
    this.userCopy = Object.assign({}, user);
  }
get user() {
  return this.__user;
}

 constructor( private userService: UserService, 
              private route: ActivatedRoute,
              private router: Router) {

              }

ngOnInit() {
this.user = new User();
this.route.paramMap.subscribe(params => {
    if (!params.get('id')) {
    return;
}
this.userService.getUser(+params.get)
});
}
backToUsers(){
  this.router.navigate(['users']);
}
saveUser() {
  if (this.user.id > 0) {
    this.updateUser();
} else {
this.createUser();
}
}
private updateUser(){
  this.userService.updateUser(this.user).subscribe(
    response => {
 
alert('User ' + this.user.name + ' modificato corettamente');
  this.router.navigate(['users']);
    
    

}
);
}

private createUser(){
  this.userService.createUser(this.user).subscribe(
    res => {
     
        this.router.navigate(['users']);
      }
    )
}



resetForm(form: FormGroup){

  if(this.user.id === 0){
    this.user = new User();
  } else {
this.user = this.userCopy;
  }
}
}
