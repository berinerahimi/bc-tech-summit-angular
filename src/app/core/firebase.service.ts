import { Injectable, computed, signal } from '@angular/core';
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore, collection, addDoc } from 'firebase/firestore';
import {
  getAuth,
  Auth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  User
} from 'firebase/auth';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private app: FirebaseApp;
  private db: Firestore;
  private auth: Auth;

  // current User as signal (reactive auth state)
  private currentUserSignal = signal<User | null>(null);
  readonly currentUser = computed(() => this.currentUserSignal());

  constructor() {
    // initialize Firebase App
    this.app = initializeApp(environment.firebase);

    // instanciate Firestore and Authenticator
    this.db = getFirestore(this.app);
    this.auth = getAuth(this.app);

    // recognize Authenticator changes
    onAuthStateChanged(this.auth, (user) => {
      this.currentUserSignal.set(user);
    });
  }

  // Firestore: add Paper (metadata only, no file)
  async addPaper(data: any) {
    return addDoc(collection(this.db, 'papers'), {
      ...data,
      createdAt: new Date()
    });
  }

  // Auth: register
  async register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  // Auth: login
  async login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  // Auth: logout
  async logout() {
    return signOut(this.auth);
  }
}
