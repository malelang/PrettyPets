import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Usuario, SimpleResponse} from '../save-data/save-data';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';


@Injectable()
export class LoginServiceProvider {
  
  usuario:Usuario;
  url="http://localhost:3000/api/users"
  constructor(public http: HttpClient) { 
    this.usuario=new Usuario();
   }
  



loguser(username:String,password:String):Observable<{SimpleResponse}>{
  const body={username: username, password: password};
  return this.http.post<SimpleResponse>(this.url+"/login",body).catch((err)=>{
    return Observable.throw(err);
  });
}

getuser(username:String){
  return this.http.get<Usuario>(this.url+"/"+username);
}
}
