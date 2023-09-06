import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
export { registrationNewUser, loginUser, logOutUser };

import { alertError, alertSuccess } from './notifies';

const firebaseConfig = {};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const email = 'i.am.blinova@gmail.com';
// const password = '12345q6';
const LS_USER_KEY = 'currentUser';

function registrationNewUser(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      const { accessToken, email } = user;
      localStorage.setItem(
        LS_USER_KEY,
        JSON.stringify({ accessToken: accessToken, email: email, name: 'Ira' })
      );
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode == 'auth/email-already-in-use') {
        alertError('Email already in use. Login with it or choose another one');
      }
    });
}

// registrationNewUser(email, password);

function logOutUser() {
  localStorage.removeItem(LS_USER_KEY);

  signOut(auth).then(() => {
    alertSuccess('Logout successfully');
  });
}

function loginUser(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      const { accessToken, email } = user;
      localStorage.setItem(
        LS_USER_KEY,
        JSON.stringify({ accessToken: accessToken, email: email, name: 'Ira' })
      );
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode == 'auth/wrong-password') {
        alertError('Your password is wrong. Please, try again');
      }
    });
}
// loginUser(email, password);
