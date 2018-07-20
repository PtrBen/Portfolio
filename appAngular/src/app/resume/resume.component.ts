import { Component , OnInit } from '@angular/core';
import { ApiService } from "../api.service"
import { MyNewInterface } from "../my-new-interface";
import { error } from 'util';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  providers:[ApiService]
})
export class ResumeComponent implements OnInit {

    _postsArray: MyNewInterface[];

    constructor(private apiService: ApiService){}

    getPosts(): void {
      this.apiService.getPosts().
      subscribe(
         resultArray => this._postsArray =
         resultArray,
         error => console.log("Error :: " + error ))
    }
    ngOnInit(): void{
      this.getPosts();
    }

    sousTitre1 = 'EXPERIENCE';
    sousTitre2 = "SKILLS";
    techno1 = "HTML/CSS";
    techno1_2 = "75%";
    techno2 = "JAVASCRIPT";
    techno2_2 = "50%";
    techno3 = "PHP";
    techno3_2 = "40%";
    techno4 = "ANGULAR";
    techno4_2 = "30%";
    techno5 = "NODEJS";
    techno5_2 = "20%";
    sousTitre3 = "HOBBIES";
    text5 = "Lecture";
    text5_2 = "Voyage";
    text5_3 = "Jeux Vidéo";
}
