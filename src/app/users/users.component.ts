
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';


@Component({
selector: 'app-users',
 templateUrl: './users.component.html',
 styleUrls: ['./users.component.css'],

})

export class UsersComponent implements OnInit{
title = 'Users';
users: User[] = [];
@Output('updateUser') updateUser = new EventEmitter();
 
 constructor( private userService: UserService) {
}
  ngOnInit(){
  this.userService.getUsers();
    }
  

onDeleteUser(user: any) {
  const deleteUser = confirm('Do you really want to delete user '+
    user.name + ' ' + user.lastname + '');
  if(deleteUser) {
    this.userService.deleteUser(user).subscribe(
      response => {
      const idx = this.users.indexOf(user);
      this.users.splice(idx, 1);
        

      }
    );
  }
}

onSelectUser(user: any) {
  const userCopy = Object.assign({}, user);
  this.updateUser.emit(userCopy);
}
}