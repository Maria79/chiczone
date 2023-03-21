import React, { useState, useEffect } from 'react';
import Formulario from '../components/formulario';
import Form from '../components/form';
import { auth } from '../firebase';
import {
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';
import { useRouter } from 'next/router';
import Login from '../components/login';
import Layout from '../components/underConstruction/Layout';

// SignIn
function Signin() {
	const [user, setUser] = useState({});
	useEffect(() => {
		return onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
	});
	// return !user ? <Login /> : <Formulario />;
	return !user ? <Login /> : <Form />;
}

export default Signin;
