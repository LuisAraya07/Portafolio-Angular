import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  termino: string;
  constructor(private route: ActivatedRoute, public productosService: ProductosService) { }

  ngOnInit(): void {
    this.route.params
    // tslint:disable-next-line: deprecation
    .subscribe( params => {
      this.termino = params.termino;
      this.productosService.buscarProducto(this.termino);
    });
  }


}
