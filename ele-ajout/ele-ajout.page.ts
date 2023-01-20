import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { PhotoService} from '../photo.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { AngularFireAuth } from '@angular/fire/compat/auth';


export interface UserPhoto {
  filepath: string;
  webviewPath: string;
}

@Component({
  selector: 'app-ele-ajout',
  templateUrl: './ele-ajout.page.html',
  styleUrls: ['./ele-ajout.page.scss'],
})
export class EleAjoutPage implements OnInit {
  items: Observable<any[]>;
  firebaseData ={
    titre: '',
    date: '',
    description: '',
    categorie:'',
    marque: '',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    caution: '',
    // eslint-disable-next-line id-blacklist
    prix: '',
    image:'',
    uid:[],
    indisponibilite: []
  };
  imagePath: string;
  upload: any;
  imgURL: any;
  id = localStorage.getItem('id');

  constructor(
    public afAuth: AngularFireAuth,
    public firestore: AngularFirestore,
    public storageModule: AngularFireStorage,
    public photoService: PhotoService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public actionSheetController: ActionSheetController,
  ) { this.items = firestore.collection('Electronique').valueChanges();
}

  async addFirebase(){

    this.firebaseData.uid.push((await this.afAuth.currentUser).uid);
      console.log(this.firebaseData);
      this.firestore.collection('Electronique').add(this.firebaseData);

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
     const filePath = await `Electronique/${this.imageName()}`;
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

public async showActionSheet(photo: UserPhoto, position: number) {
const actionSheet = await this.actionSheetController.create({
  header: 'Photos',
  buttons: [{
    text: 'Delete',
    role: 'destructive',
    icon: 'trash',
    handler: () => {
      this.photoService.deletePicture(photo, position);
    }
  }, {
    text: 'Cancel',
    icon: 'close',
    role: 'cancel',
    handler: () => {
      // Nothing to do, action sheet is automatically closed
      }
  }]
});
await actionSheet.present();
}





















  async ngOnInit() {
    await this.photoService.loadSaved();
  }

}
