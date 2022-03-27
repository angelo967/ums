import { Component,OnInit,Input,Output, EventEmitter } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { faPencilAlt, faTrash, faInfo } from '@fortawesome/free-solid-svg-icons';


@Component({
selector: 'tr[app-user]',
templateUrl: './user.component.html',
styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
    
@Input('user-data') user!: User; 
@Output('onDeleteUser') userDeleted = new EventEmitter();
@Output('onSelectUser') onSelectUser = new EventEmitter();
faPen = faPencilAlt;
faTrash = faTrash;
faInfo  = faInfo;

constructor(private userService: UserService, private route: Router) { }

ngOnInit() {
        
    }
deleteUser(){
this.userDeleted.emit(this.user);

    }
updateUser() {
 this.route.navigate(['users' ,this.user.id, 'edit']);
 this.onSelectUser.emit(this.user);
}
showUserDetail(){
this.route.navigate(['users' , this.user.id]);  
this.onSelectUser.emit(this.user);
}
}

