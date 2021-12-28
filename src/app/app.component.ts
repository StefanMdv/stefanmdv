import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {


  title = 'stefanmoldoveanu';

  langEnglish:boolean = true;
  langDeutsch: boolean = false;

  english() {
    this.langDeutsch = false;
    this.langEnglish = true;
  }

  deutsch () {
    this.langDeutsch = true;
    this.langEnglish = false;
  }

  
}




