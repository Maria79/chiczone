// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref } from 'firebase/storage';

const key = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
const publicApiKey = process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY;
const authDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;

const firebaseConfig = {
	apiKey: key,
	authDomain: authDomain,
	projectId: projectId,
	storageBucket: 'chiczone-917b9.appspot.com',
	messagingSenderId: '195191504815',
	appId: publicApiKey,
	measurementId: 'G-9RMH4YR678',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
// export const analytics = getAnalytics(firebaseApp);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(firebaseApp);

export const db = getFirestore(firebaseApp);
export const storage = getStorage();
