import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { ModalController } from '@ionic/angular';
import { PaiementComponent } from '../acceuil-audiovisuel/paiement/paiement.component';

@Component({
  selector: 'app-acceuil-jardin',
  templateUrl: './acceuil-jardin.page.html',
  styleUrls: ['./acceuil-jardin.page.scss'],
})
export class AcceuilJardinPage implements OnInit {
  images = [];
  items: any[] ;
  firebaseData = {
    titre: '',
    image:'',
    indisponibilite: []
  };
  segmentModel = 'plus';
  dataUser: any;
  id = localStorage.getItem('id');
  isDataAvailable=  false;
  dataSelect: any[] = [];


  constructor(
    public firestore: AngularFirestore,
    public afSG: AngularFireStorage,
    private authService: AuthService,
    private modalCtrl: ModalController
  ) {
    this.firestore.collection('Jardinage').valueChanges().subscribe((res) => {
      this.items = res;
      console.log(res);
      this.firestore.collection('dataUser', (ref) => ref.where('uid', '==', this.items[0].uid[0])).valueChanges().subscribe((res2) => {
        this.dataUser = res2;
        this.isDataAvailable= true;
      });
    });
  }

  ngOnInit() {
    console.log(this.items);
  }

  getImagesStorage(image: any) {
    this.afSG.ref('Jardinage').getDownloadURL().subscribe(imgUrl => {
      console.log(imgUrl);
      this.images.push({
        name: image.payload.exportVal().name,
        url: imgUrl
      });
    });
  }
  segmentChanged(event){
    console.log(this.segmentModel);
    console.log(event);
  }
  async isDate(dateString: string){
    console.log(dateString);
    //const formateddate = this.formatdate(dateString);

    setTimeout(() => {
      console.log( this.indisponibilite);
    }, 2000 );

  }

  indisponibilite(event: any){
    this.dataSelect = event.detail.value;
    console.log(this.dataSelect);
  }

  openPaiementModal(item){
    this.modalCtrl.create({
      component: PaiementComponent,
      componentProps:{
        selectDate: this.dataSelect,
        titreProduit: item.titre,
        prix: item.prix,
        caution: item.caution,
        marque: item.marque
      }
    }).then(async (modal) => {
      await modal.present();
    });
  }

}
