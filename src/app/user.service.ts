import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  User, UserInterface } from './UserInterface';
import { __values } from 'tslib';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private httpClient:HttpClient) { }

  getAllUser(){
    return this.httpClient.get<UserInterface>("https://userapi-production-1f7e.up.railway.app/v1/api/users")
  }

  
  addNewUser(user :User){
    
    const headers ={'Content-Type':'application/json'}
   return this.httpClient.post("https://userapi-production-1f7e.up.railway.app/v1/api/users",user,{'headers':headers});
    
  }

  deleteUser(id:number){
   return this.httpClient.delete(`https://userapi-production-1f7e.up.railway.app/v1/api/users/${id}`)
  }

  getById(id:number){
    return this.httpClient.get<UserInterface>(`https://userapi-production-1f7e.up.railway.app/v1/api/users/${id}`)
  }

}
