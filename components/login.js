import React, { useState, useEffect } from 'react';
// import Formulario from './formulario';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';

function Login() {
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// const [user, setUser] = useState({});
	// useEffect(() => {
	// 	return onAuthStateChanged(auth, (currentUser) => {
	// 		setUser(currentUser);
	// 	});
	// });
	const handleEmail = (e) => {
		const email = e.target.value;
		console.log(email);
		setEmail(email);
	};
	const handlePassword = (e) => {
		const password = e.target.value;
		console.log(password);
		setPassword(password);
	};
	useEffect(() => {
		setEmail();
		setPassword();
	}, []);

	//Login
	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			await signInWithEmailAndPassword(auth, email, password);
			// alert('signed in!');
		} catch (error) {
			const errorCode = error.code;
			const errorMessage = error.message;
			alert(errorMessage);
		}
		setEmail('');
		setPassword('');
	};
	//Logout
	// const handleLogout = async (e) => {
	// 	e.preventDefault();
	// 	// 	// await signOut(auth);
	// 	signOut(auth)
	// 		.then(() => {
	// 			// alert('Sign-out successful');
	// 		})
	// 		.catch((error) => {
	// 			// An error happened.
	// 		});
	// 	setEmail('');
	// 	setPassword('');
	// };

	return (
		<div className='max-w-md mx-auto mt-10 flex-col'>
			<h3 className='text-md'>Login:</h3>
			<div className='max-w-sm mx-auto flex flex-col'>
				<div className='flex mb-2'>
					<label className='mr-2' htmlFor='email'>
						Email:{' '}
					</label>
					<input
						className='border-2 px-2'
						type='email'
						name='email'
						value={email}
						placeholder='Email...'
						onChange={handleEmail}
					/>
				</div>
				<div className='flex mb-2'>
					<label className='mr-2' htmlFor='password'>
						Password:
					</label>
					<input
						className='border-2 px-2'
						type='password'
						name='password'
						value={password}
						placeholder='Password...'
						onChange={handlePassword}
					/>
				</div>
				<button
					className='border-2 px-3 max-w-xs hover:bg-slate-400'
					onClick={handleLogin}
				>
					Login
				</button>
			</div>
		</div>
	);
}

export default Login;
