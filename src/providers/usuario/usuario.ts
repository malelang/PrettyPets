import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UsuarioProvider {

  url = "http://localhost:3000/api/users"

  constructor(public http: HttpClient) {}

  all(){
    return this.http.get<Usuario[]>(this.url)
  }

  insert(user: Usuario){
    return this.http.post<SimpleResponse>(this.url, user);
  }

}

export class Usuario{
  _id:string;
  username: string;
  password: string;
  nombre:string;
  direccion: string;
  contacto:string;
  genero:string;
  edad: number;
  imagen:string;
  
}

export class SimpleResponse{
  success:boolean;
  err: string;
}
