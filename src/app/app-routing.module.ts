import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { MyworkComponent } from './mywork/mywork.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {path: '', component : SkillsComponent},
  {path: '', component : MyworkComponent, outlet: 'work' },
  {path: '', component : AboutmeComponent, outlet: 'aboutme'},
  {path: '', component : ContactComponent, outlet: 'contact'},
  {path: '', component : FooterComponent, outlet: 'footer'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
