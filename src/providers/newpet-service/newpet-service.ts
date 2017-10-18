import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Mascota, SimpleResponse, Usuario} from '../save-data/save-data';
import {Observable} from 'rxjs/Observable';

/*
  Generated class for the NewpetServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewpetServiceProvider {

  
  url1="http://localhost:3000/api/users";
  constructor(public http: HttpClient) {
    
  }

  insertpet(pet:Mascota[], id:string):Observable<SimpleResponse>{
    const body={mascotas:pet}
    return this.http.put<SimpleResponse>(this.url1+"/"+id, body).catch((err)=>{
      return Observable.throw(err);
    });
    }

  updateDireccion(address:string, id:string):Observable<SimpleResponse>{
    const body={direccion:address}
    return this.http.put<SimpleResponse>(this.url1+"/"+id, body).catch((err)=>{
      return Observable.throw(err)
    });
  }

  updateContacto(contact:string, id:string):Observable<SimpleResponse>{
    const body={contacto:contact}
    return this.http.put<SimpleResponse>(this.url1+"/"+id, body).catch((err)=>{
      return Observable.throw(err)
    });
  }

  updateEdad(age:number, id:string):Observable<SimpleResponse>{
    const body={edad:age}
    return this.http.put<SimpleResponse>(this.url1+"/"+id, body).catch((err)=>{
      return Observable.throw(err)
    });

  }

  updateUsername(username:string, id:string):Observable<SimpleResponse>{
    const body={username:username}
    return this.http.put<SimpleResponse>(this.url1+"/"+id, body).catch((err)=>{
      return Observable.throw(err)
    });

  }

  updatePassword(password:string, id:string):Observable<SimpleResponse>{
    const body={password:password}
    return this.http.put<SimpleResponse>(this.url1+"/"+id, body).catch((err)=>{
      return Observable.throw(err)
    });

  }

  updateImagen(image:string, id:string):Observable<SimpleResponse>{
    const body={imagen:image}
    return this.http.put<SimpleResponse>(this.url1+"/"+id, body).catch((err)=>{
      return Observable.throw(err)
    });

  }
    
  }


