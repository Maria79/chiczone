/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from 'react';
import Layout from './producto/layout';
import { CheckIcon } from '@heroicons/react/24/solid';

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
	//guardar datos a firestore
	const valorInicial = {
		name: '',
		desc: '',
		price: '',
	};
	const imgInicial = useState({
		image: '',
	});

	const [datos, setDatos] = useState(valorInicial);
	const [img, setImg] = useState(imgInicial);
	const [url, setUrl] = useState(null);
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
	//
	const handleImageChange = async (e) => {
		if (e.target.files && e.target.files[0]) {
			const value = e.target.files[0].name;
			setImg(value);
		}

		//
		const imgName = e.target.files[0];
		const imageRef = ref(storage, `images/${imgName.name}`);
		const urlRef = ref(storage, `images/${imgName.name}`);
		console.log(urlRef);
		uploadBytes(imageRef, imgName).then(() => {
			getDownloadURL(urlRef).then((url) => {
				setUrl(url);
			});
		});
	};

	//Submit los datos a firestore y storage
	const handleSubmit = async (e) => {
		e.preventDefault();

		//
		try {
			const docRef = await addDoc(collection(db, 'producto'), {
				img,
				url,
				...datos,
			});
			console.log('Document written with ID: ', docRef.id);
		} catch (e) {
			console.error('Error adding document: ', e);
		}

		setDatos({ ...valorInicial });
		setImg({ ...imgInicial });
		setUrl(null);
	};

	return (
		<Layout>
			<div className='text-center'>
				<h1 className='text-4xl font-semibold'>Formulario</h1>
			</div>
			<div className='flex justify-center mt-14'>
				{/* Form */}
				<form onSubmit={handleSubmit} className='border-2 px-3 py-4'>
					<div className='px-2 py-2 flex'>
						{selected ? (
							<CheckIcon className='h-6 w-6 text-green-700' />
						) : (
							<CheckIcon className='h-6 w-6 text-green-700 hidden' />
						)}
						(*)
						<label htmlFor='collection' className='font-bold'>
							Colección:
						</label>
						<select
							name='collection'
							id='collection'
							onChange={handleSelectChange}
							defaultValue={'default'}
						>
							<option value={'default'}>Elegir</option>
							<option value='pantalon'>Pantalón</option>
							<option value='blusas'>Blusas</option>
							<option value='camisas'>Camisas</option>
						</select>
					</div>
					<div className='px-2 py-2'>
						<label htmlFor='name'>Nombre del producto: </label>
						<input
							className='border-2'
							type='text'
							name='name'
							id='name'
							value={datos.name}
							onChange={handleChange}
						/>
					</div>
					<div className='px-2 py-2'>
						<label htmlFor='desc'>Description: </label>
						<input
							className='border-2'
							type='text'
							name='desc'
							id='desc'
							value={datos.desc}
							onChange={handleChange}
						/>
					</div>
					<div className='px-2 py-2'>
						<label htmlFor='price'>Precio: </label>
						<input
							className='border-2'
							type='text'
							name='price'
							id='price'
							value={datos.price}
							step='0.01'
							onChange={handleChange}
						/>
					</div>
					<div className='px-2 py-2'>
						<label htmlFor='img'>Imagen: </label>
						<input
							type='file'
							name='img'
							id='img'
							accept='image/*'
							value={img.name}
							onChange={handleImageChange}
						/>
					</div>
					<div className='w-44'>
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
