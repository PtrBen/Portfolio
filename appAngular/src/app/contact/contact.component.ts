import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

@Injectable()
export class ContactComponent implements OnInit {
    sousTitre = 'Détail';
    adress = '34 rue Delescluze, 87000 Limoges';
    phone = '07.83.73.86.54';
    mail = 'ptr.ben87@gmail.com';


  constructor() { }

  ngOnInit() {
  }

}
