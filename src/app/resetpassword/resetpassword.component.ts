import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  email:string;
  errorMessage:string;


  constructor(private userservice:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  resetPassword(email:string){
    
    this.userservice.resetPassword(email).then(
      () => {
        this.router.navigate(['/connexion']);
      },
      (error) => {
        this.errorMessage=error
       
      }
    )
    
    }

}
