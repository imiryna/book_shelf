import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
export { registrationNewUser, loginUser, logOutUser };

import { alertError, alertSuccess } from './notifies';

const firebaseConfig = {
  apiKey: 'AIzaSyBdJw0Xntd-uafZX7X7jbpxjUot7W10l9E',
  authDomain: 'book-shelf-865d9.firebaseapp.com',
  projectId: 'book-shelf-865d9',
  storageBucket: 'book-shelf-865d9.appspot.com',
  messagingSenderId: '978730630697',
  appId: '1:978730630697:web:74e50be3d40f14da7ea638',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const LS_USER_KEY = 'currentUser';

function registrationNewUser(email, password, user_name) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      const { accessToken, email } = user;
      localStorage.setItem(
        LS_USER_KEY,
        JSON.stringify({
          accessToken: accessToken,
          email: email,
          name: user_name,
        })
      );
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode == 'auth/email-already-in-use') {
        alertError('Email already in use. Login with it or choose another one');
      }
      if (errorCode == 'auth/invalid-email') {
        alertError('Wrong email, check it and try again');
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
