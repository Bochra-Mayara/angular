import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FirebaseOperation } from '@angular/fire/database/interfaces';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-peoplelist',
  templateUrl: './peoplelist.component.html',
  styleUrls: ['./peoplelist.component.css']
})
export class  PeoplelistComponent implements OnInit {
  userUpdate : User=new User();
  id:any
  errorMessage:string ='';
  errorMessage1:string =''; 

  userforupdate: AngularFireList<any>
 
    id1: any;

userfordelete : AngularFireList<any>; 
listuser: User[] = [];
formGroup: FormGroup;






userList: AngularFireList<any>
  

  constructor(private router:Router, public dialog: MatDialog,
    private firebase: AngularFireDatabase,  private usersService: UsersService,
    private route: ActivatedRoute , 
      private db:AngularFireDatabase ,private fire:AngularFireAuth) {
        this.userList = db.list('userss');
        this.userfordelete = this.firebase.list('userss');
      this.route.params.subscribe( params => {
        this.id = params
      });

      this.userforupdate = this.firebase.list('userss');
      this.id1 = this.route.snapshot.paramMap.get('id');
      console.log(this.id1)

       }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((results) => {
      
      this.listUser(results)
   
    })
    
      
    }
    listUser(entries: any[]){
      this.listuser = [];
      entries.forEach(element => {
       let y = element.payload.toJSON()
       y["$key"] = element.key
       this.listuser.push(y as User);
    })
    console.log(this.listuser);
    }
    openDialog(key: FirebaseOperation): void {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        width: '350px',
        data: "voulez-vous vraiment supprimer ces données?"
      });
      dialogRef.afterClosed().subscribe(result => {
        if(result) {
        
          this.userfordelete.remove(key);
        
       
        }
      });   
    } 
    edit(key: string){
    
      this.router.navigate(['update/'+key])
    
    }
    
  }



