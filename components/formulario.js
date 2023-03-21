/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState, useEffect } from 'react';
import Layout from '../components/underConstruction/Layout';
import { CheckIcon } from '@heroicons/react/24/solid';

import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
//import firestore
import firebaseApp from '../firebase';
import {
	getFirestore,
	collection,
	addDoc,
	getDocs,
	deleteDoc,
	getDoc,
	setDoc,
} from 'firebase/firestore';
//import firestorage
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
const storage = getStorage();
//import db
const db = getFirestore(firebaseApp);

//
export default function Formulario() {
	//Logout
	const handleLogout = async (e) => {
		e.preventDefault();
		// 	// await signOut(auth);
		signOut(auth)
			.then(() => {
				// alert('Sign-out successful');
			})
			.catch((error) => {
				// An error happened.
			});
	};

	//guardar datos a firestore
	const valorInicial = {
		name: '',
		desc: '',
		price: '0',
	};
	const imgInicial = useState({
		image: '',
	});

	const [datos, setDatos] = useState(valorInicial);
	const [size, setSize] = useState('M');
	const [date, setDate] = useState('');
	const [img, setImg] = useState([]);
	const [url, setUrl] = useState('');
	const [selected, setSelected] = useState('');

	//handleSelectChange
	const handleSelectChange = (e) => {
		const selected = e.target.value;
		setSelected(selected);
	};
	// console.log(selected);

	// handleChange para firestore
	const handleChange = (e) => {
		const { name, value } = e.target;
		setDatos({ ...datos, [name]: value });
	};
	//Select Date uploaded
	const current = new Date();
	useEffect(() => {
		setDate(
			`${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`
		);
	}, []);

	//Select Size
	const handleSizeChange = (e) => {
		const value = e.target.value;
		setSize(value);
	};
	//Select Image
	const handleImageChange = async (e) => {
		if (e.target.files && e.target.files[0]) {
			const value = e.target.files[0].name;
			setImg(value);
		}

		//
		const imgName = e.target.files[0];
		const imageRef = ref(storage, `images/${imgName.name}`);
		const urlRef = ref(storage, `images/${imgName.name}`);
		uploadBytes(imageRef, imgName).then(() => {
			getDownloadURL(urlRef).then((url) => {
				setUrl(url);
			});
		});
	};
	useEffect(() => {
		setSelected(selected);
		setDatos({ ...datos });
		setSize(size);
		setImg(img);
	}, []);

	//Submit los datos a firestore y storage
	const handleSubmit = async (e) => {
		e.preventDefault();
		//
		try {
			const docRef = await addDoc(collection(db, 'producto'), {
				size,
				date,
				selected,
				img,
				url,
				...datos,
			});
			console.log('Document written with ID: ', docRef.id);
		} catch (e) {
			console.error('Error adding document: ', e);
		}

		setImg([]);
		setSelected('');
		setSize([]);
		setUrl('');
		setDate('');
		setDatos({ ...valorInicial });
	};

	return (
		<Layout>
			<div className='absolute max-w-sm right-2 top-8'>
				<button
					className='px-4 py-1 rounded-md bg-red-500 text-lg font-semibold text-slate-200 hover:bg-red-200 hover:text-slate-700'
					onClick={handleLogout}
				>
					Log Out
				</button>
			</div>
			<div className='text-center'>
				<h1 className='font-formulario text-slate-700 font-light text-4xl'>
					Insertar prenda:
				</h1>
			</div>
			<hr className='mt-3' />
			<div className='mt-10'>
				{/* Form */}
				<form onSubmit={handleSubmit} className='max-w-2xl mx-auto px-3 py-4'>
					{/* Collection */}
					<div className='px-2 py-2 flex'>
						{selected ? (
							<CheckIcon className='h-6 w-6 text-green-700' />
						) : (
							<CheckIcon className='h-6 w-6 text-green-700 hidden' />
						)}
						(*)
						<label htmlFor='collection' className='font-bold pl-1'>
							Colección:
						</label>
						<select
							className='px-3 ml-3 mb-3 border-2 rounded-md'
							name='collection'
							id='collection'
							onChange={handleSelectChange}
							defaultValue={''}
						>
							<option className='px-3 py-2' value={''}>
								Elegir
							</option>
							<option className='px-3' value='combinado'>
								Combinados
							</option>
							<option className='px-3' value='pantalon'>
								Pantalones
							</option>
							<option className='px-3' value='camisasBlusas'>
								Camisas - Blusas
							</option>
							<option className='px-3' value='faldasVestidos'>
								Faldas - Vestidos
							</option>
							<option className='px-3' value='accesorios'>
								Accesorios
							</option>
						</select>
					</div>
					{/* Name */}
					<div className='py-2 flex justify-between'>
						<label className='mx-auto' htmlFor='name'>
							Nombre:
						</label>
						<input
							className='border-2  rounded-md w-full ml-2'
							type='text'
							name='name'
							id='name'
							value={datos.name}
							onChange={handleChange}
						/>
					</div>
					{/* Description  */}
					<div className='py-2 flex justify-between'>
						<label htmlFor='desc'>Description: </label>
						<input
							className='border-2 rounded-md w-full ml-2'
							type='text'
							name='desc'
							id='desc'
							value={datos.desc}
							onChange={handleChange}
						/>
					</div>
					{/* Talla */}
					<div className='py-2 flex justify-between'>
						<label htmlFor='tallas'>Talla: </label>
						<select
							className='border-2 rounded-md px-3 mb-3'
							name='tallas'
							id='tallas'
							onChange={handleSizeChange}
							defaultValue={'M'}
						>
							<option value='XXS'>XXS</option>
							<option value='XS'>XS</option>
							<option value='S'>S</option>
							<option value='M'>M</option>
							<option value='L'>L</option>
							<option value='XL'>XL</option>
							<option value='XXL'>XXL</option>
						</select>
					</div>
					{/* Price */}
					<div className='py-2 flex justify-between'>
						<label htmlFor='price'>Precio: </label>
						<input
							className='border-2 rounded-md w-full ml-2'
							type='text'
							pattern='^\d+(\.\d{2})?$'
							name='price'
							id='price'
							value={datos.price}
							onChange={handleChange}
						/>
					</div>
					{/* Image */}
					<div className='py-2  flex justify-between'>
						<label htmlFor='img'>Imagen: </label>
						<input
							className='ml-3'
							type='file'
							name='img'
							id='img'
							accept='image/*'
							value={img?.name}
							onChange={handleImageChange}
							multiple
						/>
					</div>
					{/*  */}
					<div className='w-44 mx-auto'>
						<img src={url} alt='' className='object-contain' />
					</div>
					<div className='mt-2 text-center'>
						<button className='bg-red-300 px-2 rounded' type='submit'>
							Upload
						</button>
					</div>
				</form>
			</div>
		</Layout>
	);
}
