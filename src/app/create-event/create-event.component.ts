import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,private dataservice:DataService) { }

  ngOnInit(): void {
  }
  addform=this.fb.group({
    eventDate:['',Validators.required],
    eventDetails:['',Validators.required]
  })
  addEvent(){
    if(this.addform.valid){
      let eDate=this.addform.value.eventDate;
      let eventDetails=this.addform.value.eventDetails;
      let uID=localStorage.getItem("uID")
     this.dataservice.addEvent(uID,eDate,eventDetails)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message);
        this.router.navigateByUrl('showEvent')
      }
    },
    (result)=>{

    alert(result.error.message)
    })
    }
    else{
      alert("Invalid form")
    }
  }
close(){
  this.router.navigateByUrl('home')
}
}
