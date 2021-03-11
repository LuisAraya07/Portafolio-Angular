import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/info-page.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  producto: Producto;
  id: string;
  constructor(private route: ActivatedRoute, public productoServices: ProductosService) { }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.route.params.subscribe(parametros => {
      this.id = parametros.id;
      this.productoServices.getProducto(this.id)
      // tslint:disable-next-line: deprecation
      .subscribe((producto: Producto) => {
        this.producto =  producto;
      });

    });
  }

}
