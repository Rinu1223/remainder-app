import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user=""
  constructor(private router:Router,private dataservice:DataService) {
    this.user= localStorage.getItem("name")
   }

  ngOnInit(): void {
  }
  create(){
    this.router.navigateByUrl('createEvent');
  }
  show(){

    
    this.router.navigateByUrl('showEvent')
  }
  remainder(){
   this.router.navigateByUrl('remainder')
   
  }
}
