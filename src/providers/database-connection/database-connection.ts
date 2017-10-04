import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class DatabaseConnectionProvider {

  db: SQLiteObject;

  constructor() { }

  getConnection(): Promise<SQLiteObject> {
    if(this.db){ //si la db no es nula, devuelvala
      return Promise.resolve(this.db);
    }else{  //si es nula, la conecto y me devuelvo
      const sqlite = new SQLite();
      return sqlite.create({
        name: 'vets.db',
        location: 'default'
      }).then(db => {
        this.db = db;
        return this.init().then(res=>{
          return Promise.resolve(db);
        });        
      })
    }
  }

  init():Promise<any> {
    const sql = "CREATE TABLE IF NOT EXISTS veterinario ("
      + "id INTEGER PRIMARY KEY AUTOINCREMENT"
      + ", nombre VARCHAR"
      + ", direccion VARCHAR"
      + ", contacto VARCHAR"
      + ")";
    return this.db.executeSql(sql, []);    
  }


}