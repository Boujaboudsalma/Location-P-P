import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getElement } from 'ionicons/dist/types/stencil-public-runtime';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.page.html',
  styleUrls: ['./avis.page.scss'],
})
export class AvisPage implements OnInit {

  avis: any; 
  constructor(public firestore: AngularFirestore) {
   }

  ngOnInit() {
  }

  ajoutavis() {
    this.avis = ((document.getElementById('avis') as HTMLInputElement).value);

    this.firestore.collection('avis').add({

      avis : this.avis,
  });
  }


}
