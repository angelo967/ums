
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../classes/user';


@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  public User!: User;
  public title!: User;
 constructor(private route: ActivatedRoute, 
             private userService: UserService,
             private router: Router
             ){ }
  
 ngOnInit() {
   this.User = new User();
  
    this.route.paramMap.subscribe(p => {
        
       this.userService.getUser(+p.get)
       
    }
    );
}
    backToUsers(){
      this.router.navigate(['users'])
    }
    resetForm(){
      this.router.navigate(['users'])
    }

    saveUser(){
      if (this.User.id > 0) {
        this.userService.updateUser(this.User);
    } else {
      console.log(this.User)
    this.userService.createUser(this.User);
    }
    this.router.navigate(['users'])
    }
  }




