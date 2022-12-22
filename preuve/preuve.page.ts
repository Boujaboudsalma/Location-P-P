import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { AuthService } from '../services/auth.service';
import { PhotoService} from '../services/photo.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-preuve',
  templateUrl: './preuve.page.html',
  styleUrls: ['./preuve.page.scss'],
})
export class PreuvePage implements OnInit {
  imagePath: string;
  upload: any;
  imgURL: any;
  items: Observable<any[]>;
  firebaseData ={
    text: '',
    marque: '',
    // eslint-disable-next-line id-blacklist
    number: '',
    image:'',
    uid:[]
  };

  constructor( private auth: AuthService,
    public firestore: AngularFirestore,
    public storageModule: AngularFireStorage,
    public photoService: PhotoService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public actionSheetController: ActionSheetController,) {this.items = firestore.collection('Electronique').valueChanges(); }



  async addFirebase(){

    this.firebaseData.uid.push(this.auth.currentUser.uid);
    console.log(this.firebaseData);
    this.firestore.collection('Paiement').add(this.firebaseData);

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
     const filePath = await `Paiement/${this.imageName()}`;
     this.firebaseData.image = await this.uploadImage(filePath, blob);
     setTimeout(() => {
console.log(this.firebaseData.image );
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
  ngOnInit() {
  }
}
