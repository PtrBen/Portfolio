import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-resume',
  templateUrl: './nav-resume.component.html',
  styleUrls: ['./nav-resume.component.css']
})
export class NavResumeComponent implements OnInit {
    navText = 'Mes expériences et compétences';

  constructor() { }

  ngOnInit() {
  }

}
