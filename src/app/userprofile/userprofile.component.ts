import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  userDetails:any;

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(
      res=>{
        this.userDetails=res;
        console.log(this.userDetails);
        this.userDetails=this.userDetails['user'];
        console.log(this.userDetails);

      },
      err=>{}
    );
  }

}
