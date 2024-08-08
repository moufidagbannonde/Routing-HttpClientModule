import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  userId !:string ;
  // injecter ActivatedRoute : accéder aux données de la route active
    constructor (private route:ActivatedRoute){
      // récupération de l'id passé dans l'url
      // this.route.params.subscribe(params => {
      //   console.log(params['id']);
      // })
    }
    ngOnInit(){
      this.userId = this.route.snapshot.paramMap.get('id') || '';
      // s'abonner au changement de paramètre ID
      this.route.paramMap.subscribe(params => {
        this.userId = params.get('id') || '';
      }) 
    }

}
