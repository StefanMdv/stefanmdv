import { Component, HostListener, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.scss']
})
export class MyworkComponent implements OnInit {

  showPortfolioRow = false;

  projects = [
    {
      name: "Quizz",
      description: "{{work.app1' | translate }}",
      img: "assets/img/quiz.png",
      categorie: "javascript",
      url: "https://stefan-moldoveanu.com/Quizapp/index.html",
    },
    {
      name: "Join",
      description: "{{ 'work.app3' | translate }}",
      img: "assets/img/Backlog.PNG",
      categorie: "javascript",
      url: "https://stefan-moldoveanu.com/Kanban/Kanban-Board/board.html",
    },
    {
      name: "El-Pollo-Loco",
      description: "{{ 'work.app4' | translate }}",
      img: "assets/img/El_Pollo_Loco.png",
      categorie: "javascript",
      url: "https://stefan-moldoveanu.com/El-Pollo-Loco/index.html",
    },
    {
      name: "Ring Of Fire",
      description: "{{ 'work.app5' | translate }}",
      img: "assets/img/ring-of-fire.png",
      categorie: "angular",
      url: "https://stefan-moldoveanu.com/RingOfFire/",
    },
    {
      name: "Business - App",
      description: "{{ 'work.app6' | translate }}",
      img: "assets/img/simple-crm.png",
      categorie: "angular",
      url: "https://stefan-moldoveanu.com/Business-App/index.html",
    },
  ];

  categorie = 'all';
  proj= [];
  workApp1 = this.translate.instant('work.app1');
  
 

  constructor(public translate: TranslateService) { 
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.proj = this.projects;
  }

  @HostListener('window:scroll', ['$event'])
  scroll(event) {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 1280) {
      this.showPortfolioRow = true;
    } else {
      this.showPortfolioRow = false
    }
  }

  useLanguage(language: string): void {
    this.translate.use(language);
}
getFilteredProjects() {
  if(this.categorie !== 'all') {
   this.proj=this.projects.filter((projects) =>
    projects.categorie ===this.categorie);
   return this.proj;
  } else {
    this.proj = this.projects;
    return this.proj;
  }
  
}

selectCategory(type) {
    this.categorie = type;
    this.getFilteredProjects();
}
}
