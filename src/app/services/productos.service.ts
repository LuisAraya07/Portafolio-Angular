import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Productos } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando = true;
  productos: Productos[] = [];
  productosFiltrados: Productos[] = [];
  constructor(private http: HttpClient) {
    this.cargarProductos();
   }


  // tslint:disable-next-line: typedef
  private cargarProductos(){

    return new Promise<void>( (resolve, rejected) => {
      this.http.get('https://angular-html-53947-default-rtdb.firebaseio.com/productos_idx.json')
      // tslint:disable-next-line: deprecation
      .subscribe( (resp: Productos[]) => {
        this.productos = resp;

        this.cargando = false;
        /*setTimeout(() => {
          this.cargando = false;
        }, 2000);*/
        resolve();
      });
    });
  }

  // tslint:disable-next-line: typedef
  getProducto(id: string){
    return this.http.get(`https://angular-html-53947-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  // tslint:disable-next-line: typedef
  buscarProducto(termino: string){
    termino = termino.toLowerCase();
    if (this.productos.length === 0){
      // Cargar productos
      this.cargarProductos().then( () => {
        // Ejecutar despues de tener los productos
        this.filtarProductos( termino );
      } );
    }else{
      this.filtarProductos( termino );
    }
  }

  // tslint:disable-next-line: typedef
  private filtarProductos(termino: string){
    this.productosFiltrados = [];
    // this.productosFiltrados = this.productos.filter(x => x === termino);
    this.productos.forEach( producto => {
      const titulo = producto.titulo.toLowerCase();
      const categoria = producto.categoria.toLowerCase();
      if ( categoria.toLowerCase().indexOf(termino) >= 0 || titulo.indexOf(termino) >= 0){
        this.productosFiltrados.push(producto);
      }
    });
  }
}
