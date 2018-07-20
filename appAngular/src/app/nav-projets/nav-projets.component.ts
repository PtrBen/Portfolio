import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-projets',
  templateUrl: './nav-projets.component.html',
  styleUrls: ['./nav-projets.component.css']
})
export class NavProjetsComponent implements OnInit {
    navText = 'Mes projets';

  constructor() { }

  ngOnInit() {
  }

}
