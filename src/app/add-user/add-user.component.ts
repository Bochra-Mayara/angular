import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  errorMessage1:string ='';
  errorMessage:string ='';
  addUserForm: FormGroup;
 
  cin:string 
  firstname:string
  lastname:string
  phone:string

  userList: AngularFireList<any>

  constructor(private userService : UserService, public router:Router,
    private db:AngularFireDatabase ,private fire:AngularFireAuth) {
      this.userList = db.list('userss')
     }

  ngOnInit(): void {
    this.addUserForm = new FormGroup({
      Firstname:new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z]+")
      ]),
      Lastname:new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z]+")
      ]),
     
      Phone:new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(8),
      ]),
      Cin:new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(8),
      ]),
      
     
    

    })

    
  }
  onSubmit() {
 
    let create = 'false';
    
            this.userList.push({
          
            cin: this.cin ,
            firstname: this.firstname ,
            lastname: this.lastname ,
            phone: this.phone,
          
              }).then(added =>{
                this.router.navigate(['/peoplelist'])
              
             
        
    }).catch(error=>{
      console.error(error)
      this.errorMessage1= error.messaage
      console.log('error', error)
      console.log(error.message)
    })
  }

}
