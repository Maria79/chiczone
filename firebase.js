// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
// import { v4 } from "uuid";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCY5HO3TstP_fUfX4M-xz01vdVz_HRKBD0',
	authDomain: 'chiczone-917b9.firebaseapp.com',
	projectId: 'chiczone-917b9',
	storageBucket: 'chiczone-917b9.appspot.com',
	messagingSenderId: '195191504815',
	appId: '1:195191504815:web:33e61aef52a554c3f8795a',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
// Initialize Cloud Storage and get a reference to the service
// export const storage = getStorage(firebaseApp);
