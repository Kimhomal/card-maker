import firebaseApp from './firebase';

class AuthService {
  login(providerName) {
    const provider = new firebaseApp.auth[`${providerName}AuthProvider`]();

    return firebaseApp.auth().signInWithPopup(provider);
  }

  logout() {
    firebaseApp.auth().signOut();
  }

  onAuthChange(onUserChanged) {
    firebaseApp.auth().onAuthStateChanged(onUserChanged);
  }
}

export default AuthService;
