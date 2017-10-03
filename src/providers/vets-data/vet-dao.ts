import {Vet} from "./vet";
import { Injectable } from '@angular/core';
import { DatabaseConnectionProvider } from '../database-connection/database-connection';
import { SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class VetDaoProvider{

    db: SQLiteObject;
    
      constructor(public con: DatabaseConnectionProvider) {}
    
      ready(): Promise<boolean> {
        if (this.db) {
          return Promise.resolve(true);
        } else {
          return this.con.getConnection().then(db => {
            this.db = db;
            return Promise.resolve(true);
          });
        }
      }
    
      insert(veterinario: Vet) {
        const sql = "INSERT INTO veterinario (nombre, direccion, contacto) VALUES(?,?,?)";
        return this.db.executeSql(sql, [veterinario.nombre, veterinario.direccion, veterinario.contacto]);
      }
    
      update(veterinario: Vet) {
        const sql = "UPDATE veterinario set nombre = ?, direccion = ?, contacto = ? WHERE id = ?";
        return this.db.executeSql(sql, [veterinario.nombre, veterinario.direccion,veterinario.contacto, veterinario.id]);
      }
    
      delete(id: number) {
        const sql = "DELETE veterinario WHERE id = ?";
        return this.db.executeSql(sql, [id]);
      }
    
      planetaById(id: number): Promise<Vet> {
        const sql = "SELECT * FROM veterinario WHERE id = ?";
        return this.db.executeSql(sql, [id]).then(results => {
          let veterinario = null;
          if (results.rows.length > 0) {
            veterinario = results.rows.item(0);
          }
          return Promise.resolve(veterinario);
        });
      }
    
      all(): Promise<Vet[]> {
        const sql = "SELECT *  FROM veterinario";
        return this.db.executeSql(sql, []).then(results => {
          let data = [];
          for (let i = 0; i < results.rows.length; i++) {
            const veterinario = results.rows.item(i);
            data.push(veterinario); 
          }
          return Promise.resolve(data);
        });
      }
}