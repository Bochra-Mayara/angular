import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorObserver } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  Form:FormGroup;
  errorMessage:String;
  
  

  constructor(private fb:FormBuilder,private toastr: ToastrService,private userservice:UserService, private router:Router) {
    let FormControls={
      email:new FormControl('',[
        Validators.required,
        Validators.email,
      ]),
      password:new FormControl('',[
        Validators.required,
        Validators.minLength(8),
      ]),
   }
   this.Form=this.fb.group(FormControls);
  }
  get email(){
    return this.Form.get('email');
  }
  get password(){
   return this.Form.get('password');
 }

  ngOnInit(): void {
  }
  save(){
    
    


    const email=this.Form.get('email').value;
    const password=this.Form.get('password').value;
     this.userservice.signInUser(email,password).then (
       () => {
         this.router.navigate(['/peoplelist']);
         this.toastr.success('welcome', 'Toastr fun!');
       },
       (error) => {
         this.errorMessage=error
         alert("connexion invalide");
       }
     )


   
  }

}
