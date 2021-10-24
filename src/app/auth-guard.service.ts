import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase';
import { from, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router:Router) { }
  canActivate(): Observable<boolean> | Promise<boolean> |boolean {
    return new Promise(
      (resolve,reject) => {
        firebase.auth().onAuthStateChanged(
          (user) => {
            if (user) {
              resolve(true); 
            } else {
              this.router.navigate(['/connexion']);
              reject(false);
            }
          }
        );
      }
    );
  }
}

