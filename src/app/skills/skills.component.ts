import { Component, HostListener, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent   implements OnInit {

  showPortfolioRow = false;
  whindowWidth :number;
  
  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
    onResize(event){
      this.whindowWidth = event.target.innerWidth
      console.log("Width: " + this.whindowWidth);
}

  @HostListener('window:scroll', ['$event'])
  scroll(event) {
    
    console.log(window.pageYOffset);
    if(this.whindowWidth >700) {
      if (window.pageYOffset > 290) {
        this.showPortfolioRow = true;
      } else {
        this.showPortfolioRow = false
      }
    } else {
      if (window.pageYOffset > 200) {
        this.showPortfolioRow = true;
      } else {
        this.showPortfolioRow = false
      }
    }
    
  }
 
  useLanguage(language: string): void {
    this.translate.use(language);
}
}
