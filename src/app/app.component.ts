import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {



  constructor(public translate: TranslateService, public router: Router) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
    translate.addLangs(['en', 'de']);
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }
  title = 'stefanmoldoveanu';

  langEnglish: boolean = true;
  langDeutsch: boolean = false;
  showButton = false;



  english() {
    this.langDeutsch = false;
    this.langEnglish = true;
  }

  deutsch() {
    this.langDeutsch = true;
    this.langEnglish = false;
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    document.getElementById('navbarSupportedContent').classList.remove('show');
  }
  scrollToElement(id): void {
    let element = document.getElementById(id);
    document.getElementById('navbarSupportedContent').classList.remove('show');
    element.scrollIntoView({ behavior: "smooth", inline: "nearest" });
  }

  @HostListener('window:scroll', ['$event'])
  scroll(event) {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 350) {
      this.showButton = true;
    } else {
      this.showButton = false
    }
  }
}




