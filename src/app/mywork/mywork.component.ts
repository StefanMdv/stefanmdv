import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.scss']
})
export class MyworkComponent implements OnInit {

  showPortfolioRow = false;
  whindowWidth: number;

  projects = [
    {
      name: "Quizz",
      description: "work.app1",
      img: "assets/img/quiz.png",
      categorie: "javascript",
      url: "https://stefan-moldoveanu.com/Quizapp/index.html",
    },
    {
      name: "Join",
      description: "work.app4",
      img: "assets/img/Backlog.PNG",
      categorie: "javascript",
      url: "https://stefan-moldoveanu.com/Kanban/Kanban-Board/board.html",
    },
    {
      name: "El-Pollo-Loco",
      description: "work.app4",
      img: "assets/img/El_Pollo_Loco.png",
      categorie: "javascript",
      url: "https://stefan-moldoveanu.com/El-Pollo-Loco/index.html",
    },
    {
      name: "Ring Of Fire",
      description: "work.app5",
      img: "assets/img/ring-of-fire.png",
      categorie: "angular",
      url: "https://stefan-moldoveanu.com/RingOfFire/",
    },
    {
      name: "Business - App",
      description: "work.app6",
      img: "assets/img/simple-crm.png",
      categorie: "angular",
      url: "https://stefan-moldoveanu.com/Business-App/index.html",
    },
    {
      name: "Pokedex App",
      description: "work.app7",
      img: "assets/img/pokedex.png",
      categorie: "angular",
      url: "https://stefan-moldoveanu.com/pokedex/index.html",
    },
  ];
  categorie = 'all';
  proj = [];




  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.proj = this.projects;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.whindowWidth = event.target.innerWidth
    console.log("Width: " + this.whindowWidth);
  }

  @HostListener('window:scroll', ['$event'])
  scroll(event) {
    console.log(window.pageYOffset);
    if (this.whindowWidth > 700) {
      if (window.pageYOffset > 1110) {
        this.showPortfolioRow = true;
      } else {
        this.showPortfolioRow = false
      }
    } else {
      if (window.pageYOffset > 740) {
        this.showPortfolioRow = true;
      } else {
        this.showPortfolioRow = false
      }
    }
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
  getFilteredProjects() {
    if (this.categorie !== 'all') {
      this.proj = this.projects.filter((projects) =>
        projects.categorie === this.categorie);
      return this.proj;
    } else {
      this.proj = this.projects;
      return this.proj;
    }



  }

  selectedButton() {
    if (this.categorie === 'all') {
      document.getElementById('all').classList.add('isSelected');
      document.getElementById('angular').classList.remove('isSelected');
      document.getElementById('javascript').classList.remove('isSelected');
    } else {
      if (this.categorie === 'angular') {
        document.getElementById('angular').classList.add('isSelected');
        document.getElementById('all').classList.remove('isSelected');
        document.getElementById('javascript').classList.remove('isSelected');
      } else {
        document.getElementById('javascript').classList.add('isSelected');
        document.getElementById('all').classList.remove('isSelected');
        document.getElementById('angular').classList.remove('isSelected');
      }
    }
  }

  selectCategory(type) {
    this.categorie = type;
    this.getFilteredProjects();
    this.selectedButton();
  }

}
