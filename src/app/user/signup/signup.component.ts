import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  
  addressForm = this.fb.group({
    role: [null, Validators.required],
    firstname: [null, Validators.required],
    lastname: [null, Validators.required],
    address: [null, Validators.required],
    
    email: [null, Validators.required],
    password: [null, Validators.required],


   
   
   
  });



 

  ngOnInit(): void {
      
  }
  onStore(){

  }

 
  constructor(private fb: FormBuilder,private userService:UserService) {}

  onSubmit(): void {
    
    this.userService.postUser(this.addressForm.value).subscribe(res=>{
            console.log("success");
            this.addressForm.reset();
            
    },err=>{
      console.log(err);
      
    })
  }






}
