import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { first } from 'rxjs/operators';

/*interface user {
  username: string;
  uid: string;
}*/

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(
    private afAuth: AngularFireAuth
  ) { }

}
