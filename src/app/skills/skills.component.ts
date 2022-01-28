import { Component, HostListener, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent   implements OnInit {

  showPortfolioRow = false;
  
  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  scroll(event) {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 350) {
      this.showPortfolioRow = true;
    } else {
      this.showPortfolioRow = false
    }
  }
 
  useLanguage(language: string): void {
    this.translate.use(language);
}
}
