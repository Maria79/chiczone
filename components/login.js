import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import Logo from './images/logo-grande.jpg';
import Link from 'next/link';

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

	return (
		<div className='max-w-md px-3 mx-auto'>
			<Link href='/'>
				<Image
					quality={80}
					className='mt-8'
					src={Logo}
					alt=''
					style={{ width: '250px', height: '200px' }}
				></Image>
			</Link>
			<div className=' max-w-md px-3 mx-auto mt-10 flex-col'>
				<h3 className='mb-6 text-2xl font-semibold text-slate-600'>Entrar:</h3>
				<div className=' max-w-sm mx-auto flex flex-col'>
					<div className='flex justify-around mb-2 '>
						<label className='mr-2 w-1/3 ' htmlFor='email'>
							Email:{' '}
						</label>
						<input
							className='border-2 px-2 w-2/3'
							type='email'
							name='email'
							value={email}
							placeholder='Email...'
							onChange={handleEmail}
						/>
					</div>
					<div className='flex justify-around mb-2'>
						<label className='mr-2 w-1/3' htmlFor='password'>
							Contraseña:
						</label>
						<input
							className='border-2 px-2 w-2/3'
							type='password'
							name='password'
							value={password}
							placeholder='Password...'
							onChange={handlePassword}
						/>
					</div>
					<button
						className='border-2 rounded-md mt-2 py-1 px-4 max-w-xs mx-auto hover:bg-purple-400'
						onClick={handleLogin}
					>
						Entrar
					</button>
				</div>
			</div>
		</div>
	);
}

export default Login;
