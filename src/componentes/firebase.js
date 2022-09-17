import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB7lnrKz2u3BTcXuQSIEubmXd7V0V-gOc4",
  authDomain: "autentificacion-trivial.firebaseapp.com",
  projectId: "autentificacion-trivial",
  storageBucket: "autentificacion-trivial.appspot.com",
  messagingSenderId: "532597283133",
  appId: "1:532597283133:web:f8c673acc0db9216dd4d54"
};


 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app)






