import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FirebaseService } from '../firebase.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.page.html',
  styleUrls: ['./edit-profil.page.scss'],
})
export class EditProfilPage implements OnInit {
  id = localStorage.getItem('id');
  dataUser: any;
  dataUser2={
    identifiant:'',
    ville:'',
    description:''
  };
  isData = false;

  constructor(
    public firestore: AngularFirestore,
    private router: Router,
    private alertController: AlertController,
    private firebaseService: FirebaseService,
    private route: ActivatedRoute
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

  updateUser(){
    this.firestore.collection('dataUser').doc(this.dataUser[0].docId).update(this.dataUser[0]);
    console.log(this.dataUser);
    this.router.navigate(['profil']);
  }


}
