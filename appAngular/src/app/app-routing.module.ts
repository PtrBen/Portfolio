import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionComponent } from "./introduction/introduction.component";
import { ContactComponent } from "./contact/contact.component";
import { ProfilComponent } from "./profil/profil.component";
import { ProjetsComponent } from "./projets/projets.component";
import { ResumeComponent } from "./resume/resume.component";



const routes: Routes = [
    {path: '', component: IntroductionComponent},
    {path: 'introduction', component: IntroductionComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'profil', component: ProfilComponent},
    {path: 'projets', component: ProjetsComponent},
    {path: 'resume', component: ResumeComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
