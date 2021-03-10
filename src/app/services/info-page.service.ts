import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPage ={};
  cargada = false;

  constructor(private http: HttpClient) {
    console.log('Info pagina services');
    // Aqui leemos el archivo JSON
    this.http.get('assets/data/data-pages.json')
    // tslint:disable-next-line: deprecation
    .subscribe((resp: InfoPage) => {
      this.cargada = true;
      this.info = resp;
      // tslint:disable-next-line: no-string-literal
      console.log( resp.email );
    });
  }
}
