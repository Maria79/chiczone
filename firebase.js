// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

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
};

// const firebaseConfig = {
// 	apiKey: 'AIzaSyCY5HO3TstP_fUfX4M-xz01vdVz_HRKBD0',
// 	authDomain: 'chiczone-917b9.firebaseapp.com',
// 	projectId: 'chiczone-917b9',
// 	storageBucket: 'chiczone-917b9.appspot.com',
// 	messagingSenderId: '195191504815',
// 	appId: '1:195191504815:web:33e61aef52a554c3f8795a',
// };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(firebaseApp);
