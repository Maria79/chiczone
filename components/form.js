import { useState } from 'react';
// import Layout from '../pages/producto/layout';
import Layout from './underConstruction/Layout';

//Logged In-Out
import { CheckIcon } from '@heroicons/react/24/solid';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';

//Firebase
import { db, storage } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Image from 'next/image';

//Currency for price input
// const formatter = new Intl.NumberFormat('en-US', {
// 	style: 'currency',
// 	currency: 'EUR',
// 	minimunFractionDigits: 2,
// });

//The Form Function
export default function Form() {
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

	//
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(0);
	const [images, setImages] = useState([]);
	const [sizes, setSizes] = useState(['M']);
	const [imageUrlList, setImageUrlList] = useState([]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		// Upload images to Firebase Storage and get download URLs
		const imageUrls = await Promise.all(
			images.map((image) => {
				const storageRef = ref(storage, `images/${image.name}`);
				return uploadBytes(storageRef, image).then((snapshot) =>
					getDownloadURL(snapshot.ref)
				);
			})
		);

		// Save product data to Firebase Firestore
		await addDoc(collection(db, 'producto'), {
			name,
			description,
			price,
			images: imageUrls,
			sizes,
		});

		// Reset form inputs
		setName('');
		setDescription('');
		setPrice('');
		setImages([]);
		setSizes('M');
		setImageUrlList([]);
	};

	const handleImageChange = (event) => {
		const fileList = event.target.files;
		const newImages = Array.from(fileList);
		setImages((prevImages) => [...prevImages, ...newImages]);

		// Convert image files to URLs
		const newImageUrlList = Array.from(fileList).map((file) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => {
				setImageUrlList((prevImageUrlList) => [
					...prevImageUrlList,
					reader.result,
				]);
			};
		});
	};

	return (
		<Layout>
			<div className='2xl:max-w-6xl lg:max-w-4xl md:max-w-2xl xs:max-w-sm mx-auto mt-20 text-end '>
				<button
					className='px-4 py-1 rounded-md bg-red-500 text-lg font-semibold text-slate-200 hover:bg-red-200 hover:text-slate-700'
					onClick={handleLogout}
				>
					Salir
				</button>
			</div>
			<div className='text-center mt-8'>
				<h1 className='font-formulario text-slate-700 font-light text-4xl'>
					Insertar prenda:
				</h1>
			</div>
			<hr className='mt-3' />

			{/*  */}
			<div className='mt-10'>
				<form
					onSubmit={handleSubmit}
					className='relative min-h-fit max-w-2xl mx-auto px-3 py-4'
				>
					{/* Name */}
					<div className='py-2 flex justify-between'>
						<label className='mx-auto' htmlFor='name'>
							Name:
						</label>
						<input
							className='border-2 rounded-md w-full ml-2'
							type='text'
							id='name'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					{/* Description  */}
					<div className='py-2 flex justify-between'>
						<label htmlFor='description'>Description:</label>
						<input
							className='border-2 rounded-md w-full ml-2'
							type='text'
							id='description'
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</div>
					{/* Talla */}
					<div className='py-2 flex'>
						<label className='pr-2' htmlFor='sizes'>
							Talla:
						</label>
						<select
							className='border-2 rounded-md px-3 mb-3'
							id='sizes'
							defaultValue={'M'}
							onChange={(e) => setSizes(e.target.value)}
						>
							<option value='-'>-</option>
							<option value='SX'>SX</option>
							<option value='S'>S</option>
							<option value='M'>M</option>
							<option value='L'>L</option>
							<option value='XL'>XL</option>
						</select>
					</div>
					{/* Price */}
					<div className='py-2 flex whitespace-nowrap'>
						<label htmlFor='price'>
							Precio: <span>€</span>
						</label>
						<input
							className='w-fit border-2 rounded-md ml-2 pl-2'
							id='price'
							type='text'
							value={price}
							onFocus={() => setPrice('')}
							onChange={(e) => setPrice(e.target.value)}
						/>
					</div>
					{/* Images */}
					<div className='py-2 flex'>
						<label htmlFor='images'>Images:</label>
						<input
							className='ml-3'
							type='file'
							id='images'
							accept='image/*'
							multiple
							onChange={handleImageChange}
						/>
					</div>
					<div className=' flex gap-2 h-32'>
						{imageUrlList.map((imageUrl) => (
							<div key={imageUrl} className=' w-36'>
								<img src={imageUrl} className='object-cover' alt='' />
							</div>
						))}
						{/* BTN Submit */}
					</div>
					<div className='mt-2 text-center'>
						<button
							className='bg-red-300 px-7 py-2 rounded text-slate-800'
							type='submit'
						>
							Subir prenda
						</button>
					</div>
				</form>
			</div>
		</Layout>
	);
}
