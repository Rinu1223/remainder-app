import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private dataservice:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  registerform=this.fb.group({
    uID:['',Validators.required] ,
    userName:['',Validators.required],
    password:['',Validators.required]
   })
   
   signUp(){
     if(this.registerform.valid){
     let uID=this.registerform.value.uID;
     let userName=this.registerform.value.userName;
     let password=this.registerform.value.password;
     this.dataservice.signUp(uID,userName,password)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message)
        this.router.navigateByUrl('')
      }
    },
    (result)=>{
    alert(result.error.message)
    
    })
   }
     else
     {
       alert("Invalid form")
     }
   
   }
   }
   