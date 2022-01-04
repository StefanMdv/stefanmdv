import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToElement(id): void {
    let element = document.getElementById(id);
    element.scrollIntoView({behavior: "smooth", inline: "nearest"});
  }

}
