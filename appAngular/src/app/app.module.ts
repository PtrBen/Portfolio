import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavProfilComponent } from './nav-profil/nav-profil.component';
import { NavResumeComponent } from './nav-resume/nav-resume.component';
import { NavProjetsComponent } from './nav-projets/nav-projets.component';
import { NavContactComponent } from './nav-contact/nav-contact.component';
import { ContactComponent } from './contact/contact.component';
import { ProfilComponent } from './profil/profil.component';
import { ProjetsComponent } from './projets/projets.component';
import { ResumeComponent } from './resume/resume.component';
import { FooterComponent } from './footer/footer.component';
import { RetourComponent } from './retour/retour.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    NavProfilComponent,
    NavResumeComponent,
    NavProjetsComponent,
    NavContactComponent,
    ContactComponent,
    ProfilComponent,
    ProjetsComponent,
    ResumeComponent,
    FooterComponent,
    RetourComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
