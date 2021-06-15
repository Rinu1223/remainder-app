import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,private dataservice:DataService) { }

  ngOnInit(): void {
  }
loginform=this.fb.group({
  uID:['',Validators.required],
  pswd:['',Validators.required]
})
login(){

  if(this.loginform.valid){
    let uID=this.loginform.value.uID;
    let password=this.loginform.value.pswd;
    this.dataservice.login(uID,password)
    .subscribe((result:any)=>{
      if(result){
        localStorage.setItem("name",result.name)
        localStorage.setItem("uID",result.uID)
        alert(result.message);
        this.router.navigateByUrl("home");
     
      }
    },
    (result)=>{
      alert(result.error.message);
      
    
    })
   }
   else{
     alert("Invalid form")
   }
  
}
signUp(){
  this.router.navigateByUrl("register");
}
}
