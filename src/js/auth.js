import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
