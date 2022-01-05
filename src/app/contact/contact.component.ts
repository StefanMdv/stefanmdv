import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact = {
    name :'',
  mail : '',
  msg : '',
  };
  
  


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

  async sendMail(ngForm) {
    let myForm = ngForm;
    let alertme = this.translate.instant('contactForm.alert')
    if (ngForm.form.valid) {
      let formData = new FormData();
      formData.append('name', this.contact.name);
      formData.append('email', this.contact.mail);
      formData.append('message', this.contact.msg);

      await fetch('https://stefan-moldoveanu.com/send_mail.php', {
        method: "POST",
        body: formData
      });
      myForm.reset();
      alert(alertme);
      document.getElementById('formName').innerHTML = '';
      document.getElementById('formEmail').innerHTML = '';
      document.getElementById('formMsg').innerHTML = '';
    } 
  }
}
