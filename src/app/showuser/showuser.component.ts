import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.css']
})
export class ShowuserComponent implements OnInit {
  constructor(private userService:UserService,private router:Router){}

  users:any
  ngOnInit(): void {
    this.userService.getAllUser().subscribe(value => this.users=value)
  }

  deleteUser(id:number){
    this.userService.deleteUser(id).subscribe(value=>
      {
        if(value==null)
        {
          window.location.reload();
        }
      })
  }

  // getUserById(id:number){
  //   this.router.navigate(['/updateuser'])
  //   this.userService.getUserById(id);
  // }
}
