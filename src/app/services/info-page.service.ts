import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AboutPage, InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPage = {};
  aboutInfo: AboutPage[] = [];
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

  // tslint:disable-next-line: typedef
  getAbout(){
    return this.http.get<AboutPage[]>('https://angular-html-53947-default-rtdb.firebaseio.com/equipo.json');
  }
}
