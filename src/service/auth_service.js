import {
  firebaseAuth,
  githubAuthProvider,
  googleAuthProvider,
} from './firebase';

class AuthService {
  login(providerName) {
    switch (providerName) {
      case 'Google':
        return firebaseAuth.signInWithPopup(googleAuthProvider);
      case 'Github':
        return firebaseAuth.signInWithPopup(githubAuthProvider);
      default:
        throw new Error('Not supported authprovider name');
    }
  }

  logout() {
    firebaseAuth.signOut();
  }

  onAuthChange(onUserChanged) {
    firebaseAuth.onAuthStateChanged(onUserChanged);
  }
}

export default AuthService;
