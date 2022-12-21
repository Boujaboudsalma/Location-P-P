import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-search-elec',
  templateUrl: './search-elec.page.html',
  styleUrls: ['./search-elec.page.scss'],
})
export class SearchElecPage implements OnInit {
  filterTerm: string;
  public products: any[];
  data: any;



  constructor(private firestore: AngularFirestore) { }


  ngOnInit() {
    this.firestore.collection('Electronique').valueChanges().subscribe(products =>
      {
        this.products = products;
      });

  }
}



