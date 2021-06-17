import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-remainder',
  templateUrl: './remainder.component.html',
  styleUrls: ['./remainder.component.css']
})
export class RemainderComponent implements OnInit {
  eventDet=""
  constructor(private dataservice:DataService,private router:Router) {
    let uID=localStorage.getItem("uID")
    this.dataservice.displayRemainder(uID)
     .subscribe((result:any)=>{
       if(result){
         this.eventDet=result.message
        }
      },
      (result)=>{
alert(result.error.message)
      
     })
  }
   

  ngOnInit(): void {
  }
back(){
  this.router.navigateByUrl('home')
}
}
