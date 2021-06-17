import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  options={
    withCredentials: true
  }
  constructor(private http:HttpClient) { }
  login(uID:any,password:any){
const data={
  uID:uID,
  password:password
}
return this.http.post('http://localhost:3000/login',data)
  }
  addEvent(uID:any,eDate:any,eDetails:any){
    const data={
      uID:uID,
      eDate:eDate,
      eDetails:eDetails
    }
    return this.http.post('http://localhost:3000/createEvent',data,this.options)

  }
  displayevent(uID:any){
    const data={
      uID:uID
    }
    
    return this.http.post('http://localhost:3000/showEvent',data,this.options)
  }
  signUp(uID:any,userName:any,password:any){
    const data={
      uID:uID,
      userName:userName,
      password:password
    }
    
    return this.http.post('http://localhost:3000/register',data,this.options)

  }
  deleteRow(eventdet:any,uID:any){
    const data={
      eventdet:eventdet,
      uID:uID
    }
    return this.http.post('http://localhost:3000/deleteEvent',data,this.options)
  }
  displayRemainder(uID:any){
    const data={
      uID:uID
    }
    return this.http.post('http://localhost:3000/displayRemainder',data,this.options)
  }
  update(uID:any,indexNum:any,eDate:any,eDetails:any){
   const data={
      uID:uID,
      indexNum:indexNum,
      eDate:eDate,
      eDetails:eDetails
    }
    return this.http.post('http://localhost:3000/updateRainder',data,this.options)
    
    
  }
}
