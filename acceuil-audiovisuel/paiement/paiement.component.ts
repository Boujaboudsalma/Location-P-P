import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ActionSheetController, AlertController, LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { PhotoService } from 'src/app/photo.service';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.scss'],
})
export class PaiementComponent implements OnInit {
  selectDate: any[];
  titreProduit: any;
  prix: any;
  caution: any;
  marque: any;

  dataUser: Observable<any[]>;
  id = localStorage.getItem('id');
  imagePath: string;
  upload: any;
  imgURL: any;
  paiement= {
    titre: '',
    marque: '',
    prix: 0,
    caution:'',
    jour: 0,
    image:'',
    date: [],
    uidLocataire:[],
    uidProprietaire: []
  };



  constructor(
    private modalCtrl: ModalController,
    public afAuth: AngularFireAuth,
    private auth: AuthService,
    public firestore: AngularFirestore,
    public afSG: AngularFireStorage,
    public storageModule: AngularFireStorage,
    public photoService: PhotoService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public actionSheetController: ActionSheetController) {
    this.dataUser = this.firestore.collection('dataUser', (ref) => ref.where('email', '==', this.id) ).valueChanges();

   }

  ngOnInit() {
    console.log(this.selectDate.length);

  }

  cancel() {

    return this.modalCtrl.dismiss(null, 'cancel');

  }

 async confirm(){
    console.log('confirm');
    this.paiement.uidLocataire.push(this.auth.currentUSer.uid);
    this.paiement.titre = this.titreProduit;
    this.paiement.marque = this.marque;
    this.paiement.prix = this.prix*this.selectDate.length;
    this.paiement.caution = this.caution;
    this.paiement.jour = this.selectDate.length;
    this.paiement.date= this.selectDate;
    console.log(this.paiement);
    this.firestore.collection('paiement').add(this.paiement);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'La preuve de paiement a bien été enregistrée',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async addPhotoToGallery() {

    await Camera.getPhoto({
     resultType: CameraResultType.Uri, // file-based data; provides best performance
     source: CameraSource.Camera, // automatically take a new photo with the camera
     quality: 100, // highest quality (0 to 100)
   }).then(async (photo)=> {
     this.imgURL = await fetch(photo.webPath);
     console.log(this.imgURL);
     const blob = await this.imgURL.blob();
     console.log(blob);
     const filePath = await `paiement/${this.imageName()}`;
    this.paiement.image = await this.uploadImage(filePath, blob);
     setTimeout(() => {
    console.log(this.paiement.image );
     }, 2000);
   });
}
uploadImage(filePath: string,file: any  ){
  return this.storageModule.upload(filePath, file).then((res) => res.ref.getDownloadURL());
}

imageName() {
  const newTime = Math.floor(Date.now() / 1000);
  return Math.floor(Math.random() * 20) + newTime;
  }
  async addImage(details: any){
    details.imgURL = this.imgURL;
    const loading = await this.loadingController.create();
  await loading.present();

  }

}
