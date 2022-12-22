import { Component, OnInit } from '@angular/core';
import { doc, Firestore} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-mes-paiements',
  templateUrl: './mes-paiements.page.html',
  styleUrls: ['./mes-paiements.page.scss'],
})
export class MesPaiementsPage implements OnInit {
  isModalOpen = false;
  isDataAvalaible = false;
  images = [];
  items: any[] = [];
  firebaseData = {
    text: '',
    image:''
  };
  photoService: any;

  constructor(private authService: AuthService,
      private firestore: AngularFirestore,
      private afSG: AngularFireStorage) {
        this.getPaiement().subscribe(async (res) => {
          this.isDataAvalaible = true;
          console.log(this.items);
          });
       }

      getPaiement(){
        return this.firestore.collection('Paiement').snapshotChanges().pipe(map((actions) => actions.map((a) => {
        const data = a.payload.doc.data() as any;
        const docId = a.payload.doc.id;
        this.items.push(data);
        this.items = this.items.filter( (e) => e.uid.includes(this.authService.currentUser.uid));
        return { docId, ...data }; })));
      }

      setOpen(isOpen: boolean) {
        this.isModalOpen = isOpen;
      }

  ngOnInit() {
  }

}
