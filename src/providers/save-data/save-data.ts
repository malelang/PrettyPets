import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class SaveDataProvider {

  url1 = "http://localhost:3000/api/pets";
  url2 = "http://localhost:3000/api/users";
  usuario: Usuario;
  mascota: Mascota;

  constructor(public http: HttpClient) {
    this.usuario = new Usuario();
    this.mascota = new Mascota();
  }

  all(): Observable<Mascota[]> {
    return this.http.get<Mascota[]>(this.url1)

  }

  insert(user: Usuario): Observable<SimpleResponse> {
    return this.http.post<SimpleResponse>(this.url2, user);
  }

  insertpet(pet: Mascota): Observable<SimpleResponse> {
    return this.http.post<SimpleResponse>(this.url1, pet);
  }

  addpet(pet: Mascota, user: Usuario): Observable<SimpleResponse> {
    return this.http.put<SimpleResponse>(this.url2, pet);
  }
}

export class Mascota {
  _id: string;
  nombre: string;
  tipo: string;
  raza: string;
  sexo: string;
  edad: number;
  imagen: string;
}

export class Usuario {
  _id: string;
  username: string;
  password: string;
  nombre: string;
  direccion: string;
  contacto: string;
  genero: string;
  edad: number;
  imagen: string;
  mascotas: Mascota[] = [];
  vacunas: Vacuna[] = [];
  parasitos: Parasito[] = [];
}

export class Vacuna {
  public fecha: Date;
  public enfermedad: string;
  public veterinario: string;
  public receptor: string;
}

export class Parasito {
  public fecha: Date;
  public peso: number;
  public producto: string;
  public proxima: Date;
  public receptor: string;
}

export class SimpleResponse {
  success: boolean;
  err: string;
}

