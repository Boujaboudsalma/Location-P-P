import { Component, OnInit } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-search-jard',
  templateUrl: './search-jard.page.html',
  styleUrls: ['./search-jard.page.scss'],
})
export class SearchJardPage implements OnInit {
  filterTerm: string;
  public products: any[];
  data: any;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    this.firestore.collection('Jardinage').valueChanges().subscribe(products =>
      {
        this.products = products;

      });
  }

}
