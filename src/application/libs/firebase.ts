import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { environment } from "../../environments/environment.development";

const firebaseConfig = {
    apiKey: environment.API_KEY,
    authDomain: environment.AUTH_DOMAIN,
    projectId: environment.PROJECT_ID,
    storageBucket: environment.STORAGE_BUCKET,
    messagingSenderId: environment.MESSAGING_SENDER_ID,
    appId: environment.APP_ID,
    measurementId: environment.MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
