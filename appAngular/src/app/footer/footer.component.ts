import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    footerText = 'Copyright PORTIER Benjamin ©  Site réalisé avec Angular';

  constructor() { }

  ngOnInit() {
  }

}
