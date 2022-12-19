import { Component, NgModule, OnInit, ValueProvider , ViewChild} from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IonDatetime } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insdisponibilite',
  templateUrl: './insdisponibilite.page.html',
  styleUrls: ['./insdisponibilite.page.scss'],
})
export class InsdisponibilitePage implements OnInit {
  id = localStorage.getItem('id');
  dataUser: any;

  isData = false;
  value?: string | null;

  constructor(
    public firestore: AngularFirestore,
    private router: Router,
  ) {

   }

   getUser(): Observable<any>{
    return this.firestore.collection('dataUser', (ref) => ref.where('email', '==', this.id) ).snapshotChanges().pipe(

      map((actions) =>

          actions.map((a) => {

            const data = a.payload.doc.data() as any;

            const docId = a.payload.doc.id;
            console.log('Ok');
            return {docId,...data} ;


          })

        )

    );;
  }
  indisponibilite(event: any){
    this.dataUser[0].indisponibilite = event.detail.value;
    console.log(this.dataUser);
  }

  ngOnInit() {
    this.getUser().subscribe((res) =>{
      this.dataUser = res;
      this.isData = true;
      console.log(this.dataUser);
    });

    setTimeout(() => {


      console.log(this.dataUser);
    }, 1000);
  }
  confirm(){
    this.firestore.collection('dataUser').doc(this.dataUser[0].docId).update(this.dataUser[0]);
    console.log(this.dataUser);

  }



}

