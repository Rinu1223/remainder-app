import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.component.html',
  styleUrls: ['./show-event.component.css']
})
export class ShowEventComponent implements OnInit {
  eventDet=""
  
  constructor(private dataservice:DataService) { 
    let uID=localStorage.getItem("uID")
    this.dataservice.displayevent(uID)
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
 
  
}
