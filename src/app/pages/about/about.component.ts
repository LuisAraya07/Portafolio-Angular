import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AboutPage } from 'src/app/interfaces/info-page.interface';
import { InfoPageService } from 'src/app/services/info-page.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public about$: Observable<AboutPage[]>;
  constructor(public aboutPageService: InfoPageService) { }

  ngOnInit(): void {
    this.about$ = this.aboutPageService.getAbout();
  }

}
