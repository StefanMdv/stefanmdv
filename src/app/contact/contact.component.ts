import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name='';
  mail='';
  msg = '';


  constructor(public translate: TranslateService) { 
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  
  useLanguage(language: string): void {
    this.translate.use(language);
  }

  async sendMail(){
    let formData = new FormData();
    formData.append('name', this.name);
    formData.append('email', this.mail);
    formData.append('message', this.msg);
    
     await fetch('https://stefan-moldoveanu.com/send_mail.php', {
         method: "POST",
         body: formData
      });
      alert('E-Mail send!');
    }

    
}
