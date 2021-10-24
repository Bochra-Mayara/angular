import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myform:FormGroup;
  errorMessage:String;
  
  

  constructor(private fb:FormBuilder,private userservice:UserService, private router:Router) {
    let FormControls={
      firstname:new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z]+")
      ]),
      lastname:new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z]+")
      ]),
      email:new FormControl('',[
        Validators.required,
        Validators.email,
      ]),
      phone:new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(8),
      ]),
      password:new FormControl('',[
        Validators.required,
        Validators.maxLength(8),
      ]),
    }

    this.myform=this.fb.group(FormControls);
   }

   get firstname(){
     return this.myform.get('firstname');
   }
   get lastname(){
    return this.myform.get('lastname');
  }
  get email(){
    return this.myform.get('email');
  }
  get phone(){
    return this.myform.get('phone');
  }
  get password(){
    return this.myform.get('password');
  }

  ngOnInit(): void {
  }
  save(){
    const email=this.myform.get('email').value;
    const password=this.myform.get('password').value;
     this.userservice.createNewUser(email,password).then (
       () => {
         this.router.navigate(['/connexion']);
       },
       (error) => {
         this.errorMessage=error
         alert("connexion invalide");
       }
     )
     
  }

}
