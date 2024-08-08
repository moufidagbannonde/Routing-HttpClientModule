import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  userId!: string;  // Ou number, selon votre logique

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Méthode 1 : Récupérer le paramètre ID une seule fois lors de l'initialisation
    this.userId = this.route.snapshot.paramMap.get('id') || '';
    console.log(this.userId);

    // // Méthode 2 : S'abonner aux changements de paramètre ID (utile si le paramètre peut changer sans rechargement du composant)
    // this.route.paramMap.subscribe(params => {
    //   this.userId = params.get('id') || '';
    // });
  }
}