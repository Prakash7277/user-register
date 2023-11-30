import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../UserInterface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent  {

  user:User = new User()

  constructor(private userService:UserService, private router:Router){}
 
  userForm = new FormGroup({
    name : new FormControl(),
    age : new FormControl(),
    phone : new FormControl()
  })
  
  submitData(){

    this.user.name =this.userForm.value.name
    this.user.age = this.userForm.value.age
    this.user.phone = this.userForm.value.phone

    // console.log(this.user);
    

    this.userService.addNewUser(this.user).subscribe(data=>
      {
        // console.log(data)
        if(data)
        {
          this.router.navigate(['/showuser'])
        }
      })
}

}