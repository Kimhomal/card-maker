import firebaseApp from './firebase';

class AuthService {
  async login(providerName) {
    const provider = new firebaseApp.auth[`${providerName}AuthProvider`]();

    return firebaseApp
      .auth()
      .signInWithPopup(provider)
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;

        console.log(`${errorCode} ${errorMessage} ${email} ${credential}`);
      });
  }
}

export default AuthService;
