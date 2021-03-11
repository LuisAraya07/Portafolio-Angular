import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Productos } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando = true;
  productos: Productos[] = [];
  constructor(private http: HttpClient) {
    this.cargarProductos();
   }


  // tslint:disable-next-line: typedef
  private cargarProductos(){
    this.http.get('https://angular-html-53947-default-rtdb.firebaseio.com/productos_idx.json')
      // tslint:disable-next-line: deprecation
      .subscribe( (resp: Productos[]) => {
        this.productos = resp;

        this.cargando = false;
        /*setTimeout(() => {
          this.cargando = false;
        }, 2000);*/
      });
  }
}
