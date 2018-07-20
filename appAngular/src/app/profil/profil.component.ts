import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
    titre = 'FUTUR DEVELOPPEUR WEB';
    resume0 = 'Bienvenue sur mon site.';
    resume1 = 'Benjamin PORTIER, 24 ans, en formation développeur web depuis décembre 2017 au centre de formation AFORMAC à Limoges.';
    resume2 = "Diplomé d'un BTS GUC (Gestionnaire d'Unités Commerciales) à l'ESCS (Ecole Supérieur de Commerces et Services) (Limoges) en alternance en grande distribution, je souhaite en apprendre d'avantage sur le marché du développement web afin d'y évoluer."
    resume3 = "Je vous invite à naviguer à travers les différentes parties du site afin d'en connaître un peu plus sur mes expériences et mes projets. Sachez aussi que je suis à la recherche d'un stage du 14 mai au 2 juillet 2018 dans le cadre de ma formation.";
    resume4 = 'Merci pour votre attention et bonne visite.';

    constructor() { }

    ngOnInit() {

    }
}
