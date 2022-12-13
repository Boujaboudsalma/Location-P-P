import { Component, OnInit } from '@angular/core';
import { doc, Firestore} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-mes',
  templateUrl: './mes.page.html',
  styleUrls: ['./mes.page.scss'],
})
export class MesPage implements OnInit {
  isDataAvalaible = false;
  images = [];
  items: any[] = [];
  firebaseData = {
    text: '',
    image:''
  };
  photoService: any;

    constructor(
      private authService: AuthService,
      private firestore: AngularFirestore,
      private afSG: AngularFireStorage) {
      this.getBTP().subscribe(async (res) => {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        this.getJard().subscribe(async (res) => {
          // eslint-disable-next-line @typescript-eslint/no-shadow
          this.getElec().subscribe(async (res) => {
          this.isDataAvalaible = true;
          console.log(this.items);
          });
        });
      });

  }

  getBTP(){
    return this.firestore.collection('BTP').snapshotChanges().pipe(map((actions) => actions.map((a) => {
    const data = a.payload.doc.data() as any;
    const docId = a.payload.doc.id;
    this.items.push(data);
    return { docId, ...data }; })));
  }

  getJard(){
    return this.firestore.collection('Jardinage').snapshotChanges().pipe(map((actions) => actions.map((a) => {
    const data = a.payload.doc.data() as any;
    const docId = a.payload.doc.id;
    this.items.push(data);
    return { docId, ...data }; })));
  }
  getElec(){
    return this.firestore.collection('Electronique').snapshotChanges().pipe(map((actions) => actions.map((a) => {
    const data = a.payload.doc.data() as any;
    const docId = a.payload.doc.id;
    this.items.push(data);
    this.items = this.items.filter( (e) => e.uid.includes(this.authService.currentUser.uid));
    return { docId, ...data }; })));
  }

    ngOnInit() {
    }

    /*getImagesStorage(image: any) {
      this.afSG.ref('BTP').getDownloadURL().subscribe(imgUrl => {
        console.log(imgUrl);
        this.images.push({
          name: image.payload.exportVal().name,
          url: imgUrl
        });
      });
    }*/

}
