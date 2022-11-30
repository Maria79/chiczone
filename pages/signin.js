import React, { useState, useEffect } from 'react';
import Formulario from '../components/formulario';
import { auth } from '../firebase';
import {
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';
import { useRouter } from 'next/router';
import Login from '../components/login';

// SignIn
function Signin() {
	const [user, setUser] = useState({});
	useEffect(() => {
		return onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
	});
	return !user ? <Login /> : <Formulario />;
}

export default Signin;
