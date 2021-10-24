import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helloworld';
  constructor(){
  var firebaseConfig = {
    apiKey: "AIzaSyBNKuT74wu_cRyADrpDc9RPXpvXfiHbtGY",
    authDomain: "stage1-a1e6b.firebaseapp.com",
    databaseURL: "https://stage1-a1e6b-default-rtdb.firebaseio.com",
    projectId: "stage1-a1e6b",
    storageBucket: "stage1-a1e6b.appspot.com",
    messagingSenderId: "352809636715",
    appId: "1:352809636715:web:3f3a4ea685ffe40385722e"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}
}
