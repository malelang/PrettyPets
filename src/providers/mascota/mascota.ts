import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class MascotaProvider {

  url = "http://localhost:3000/api/pets"

  constructor(public http: HttpClient) {}

  all(){
    return this.http.get<Mascota[]>(this.url)
  }

  insert(pet: Mascota){
    return this.http.post<SimpleResponse>(this.url, pet);
  }

}

export class Mascota{
      _id: string;
      nombre:string;
      tipo: string;
      raza: string;
      sexo:string;
      edad: number;
      imagen:string;
      
}

export class SimpleResponse{
  success:boolean;
  err: string;
}
