import { Component } from '@angular/core';
import { Auth, User, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { FirebaseService } from '../../shared/services/firebase.service';
import { User as AppUser } from '../../shared/models/user.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private auth: Auth, private firebaseService: FirebaseService) {
    this.auth.onAuthStateChanged((user: User | null) => {
      if (user) {
        console.log('Logged in user:', user.displayName, user.email);
      } else {
        console.log('No user is logged in');
      }
    });
  }

  loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider)
      .then((result) => {
        console.log('User signed in:', result.user);
        this.updateFirebase(result.user)
      })
      .catch((error) => {
        console.error('Error during Google sign-in:', error);
      });
  }

  updateFirebase(user: any) {
    this.firebaseService.addUser(this.getUserInfosFromGoogle(user))
  }

  getUserInfosFromGoogle(user: any): AppUser {
    return new AppUser({
      email: user.email,
      id: user.uid,
      image: user.photoURL,
      name: user.displayName,
      status: 'online',
    });
  }

}
