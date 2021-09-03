import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router:Router,private userService:UserService) { }
  regexp=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  model={
    email:"",
    password:""
  }

  
    ngOnInit() {
    }
  
 
    errmsg:any;
  onSubmit(form:NgForm){

    this.userService.login(form.value).subscribe(
      (res)=>{
        this.userService.setToken(res);
        this.router.navigateByUrl("/userprofile");

      },
      err=>{
          this.errmsg=err.error.message;
      }
    )

  }

}
