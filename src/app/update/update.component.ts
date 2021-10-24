import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id:any
  errorMessage:string ='';
  updateForm: FormGroup;
  errorMessage1:string ='';
 
  cin:string 
  firstname:string
  lastname:string
  phone:string
  userdetails: any= []
  
  userforupdate: AngularFireList<any>
  data = {
    cin: '',
    firstname : '' ,

    lastname :  '' ,
    phone :  ''  
   } 
    id1: any;

  constructor(private router:Router,private firebase: AngularFireDatabase,
    private route: ActivatedRoute, private userService: UsersService) {
      this.route.params.subscribe( params => {
        this.id = params
      });
      this.userforupdate = this.firebase.list('userss');
      this.id1 = this.route.snapshot.paramMap.get('id');
      console.log(this.id1)
     }

  ngOnInit(): void {
    this.updateForm = new FormGroup({
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
     
    this.userService.getUserById(this.id1).subscribe((results) => {
      
      this.getuser(results)
    
    })
  }

  getuser(entries: { payload: { toJSON: () => any; }; key: any; }[]){
   
    this.userdetails = [];
  
    entries.forEach((element: { payload: { toJSON: () => any; }; key: any; }) => {
       
       
      let y = element.payload.toJSON()
      y["$key"] = element.key
      this.userdetails.push(y as User);

      this.data.cin = this.userdetails[0]['cin'] 
      this.data.firstname = this.userdetails[0]['firstname'] 
      this.data.lastname = this.userdetails[0]['lastname'] 
      this.data.phone = this.userdetails[0]['phone'] 
     
   })
   console.log("res");
   console.log(this.data.lastname);
   console.log(this.userdetails);
   }


   onSubmit1() {
    
    let create = 'false';
    
     console.log(this.data.cin);
     this.userforupdate.update(this.id1 , {
      cin :  this.data.cin ,
      firstname : this.data.firstname  ,
      lastname :  this.data.lastname ,
      phone :  this.data.phone
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
