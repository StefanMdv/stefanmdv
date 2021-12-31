import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.scss']
})
export class MyworkComponent implements OnInit {

  constructor(public translate: TranslateService) { 
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
  }

  useLanguage(language: string): void {
    this.translate.use(language);
}
}
