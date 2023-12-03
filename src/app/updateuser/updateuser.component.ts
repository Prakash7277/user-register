import { Component ,OnInit } from '@angular/core';
import { UserService } from '../user.service';

import { User, UserInterface } from '../UserInterface';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent   implements OnInit{

      constructor(  private activeRoute:ActivatedRoute,
        private userService:UserService,
        private router:Router,
        private formBuilder:FormBuilder){}

      id= +this.activeRoute.snapshot.paramMap.get('id')!
      user:User = new User()
      userForm!:FormGroup;
 
  ngOnInit(): void {
      // this.userService.getUserById(this.id).subscribe(data => console.log(data))


      this.userForm=this.formBuilder.group({
        name:['',[Validators.minLength(3),Validators.maxLength(10),Validators.required]],
        age:['',[Validators.min(18),Validators.max(30),Validators.required]],
        phone:['']
      })

      this.userService.getUserById(this.id).subscribe(data => this.userForm.patchValue(data))

    }
        get name():FormGroup
        {
          return this.userForm.get("name") as FormGroup
        }

        get age():FormGroup
        {
          return this.userForm.get("age") as FormGroup
        }

        submitData()
        {
          
      
          console.log(this.userForm.value);
      
          this.user.name = this.userForm.value.name
          this.user.age = this.userForm.value.age
          this.user.phone = this.userForm.value.phone
        
           console.log(this.user);
          
      
          this.userService.updateUser(this.id,this.user).subscribe(data=>
            {
              console.log(data)
              if(data)
              {
                this.router.navigate(['/showuser'])
              }
            })
      
       
         } 


}