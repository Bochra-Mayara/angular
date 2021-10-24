import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userList: AngularFireList<any>

  constructor(private db:AngularFireDatabase) {
    this.userList = db.list('userss')
   }
   createUser(user: User) {
    
    this.userList.push({
    phone: user.phone ,
    firstname: user.firstname ,
    lastname: user.lastname ,
    cin: user.cin
    
}).catch(error=>{
console.error(error)

})

}
getUsers() : Observable<any>{
  return this.db.list('userss').snapshotChanges();
  }
  
  getUserById(id: string | number | boolean) : Observable<any>{
    return this.db.list('userss', ref => ref.orderByKey().equalTo(id)).snapshotChanges();
  }
}
