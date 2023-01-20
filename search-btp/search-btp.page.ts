import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-search-btp',
  templateUrl: './search-btp.page.html',
  styleUrls: ['./search-btp.page.scss'],
})
export class SearchBtpPage implements OnInit {
  filterTerm: string;
  public products: any[];
  data: any;


  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    this.firestore.collection('BTP').valueChanges().subscribe(products =>
      {
        console.log(products);
        this.products = products;
      });
  }

}
