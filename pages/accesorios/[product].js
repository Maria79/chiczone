/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Layout from '../../components/underConstruction/Layout';
//

//importar firebase
import firebaseApp from '../../firebase';
import {
	getFirestore,
	collection,
	addDoc,
	getDocs,
	doc,
	deleteDoc,
	getDoc,
	setDoc,
} from 'firebase/firestore';
import { async } from '@firebase/util';
import Router, { useRouter } from 'next/router';
const db = getFirestore(firebaseApp);

//

export default function Product({ producto }) {
	const { query } = useRouter();
	const router = useRouter();

	const deleteProduct = async () => {
		const { product } = query;
		await deleteDoc(doc(db, 'producto', product));
		router.push(`/accesorios/${producto.tipo}`);
	};

	const [showZoomedIn, setShowZoomedIn] = useState(false);

	function handleClick() {
		setShowZoomedIn(!showZoomedIn);
	}

	return (
		<Layout>
			<div className='flex justify-center mt-6 py-16'>
				<div className='xs:w-72 sm:w-96 rounded-md px-3 pt-10'>
					<div className=''>
						<h2 className='capitalize text-2xl text-slate-700 font-bold'>
							{producto.name}
						</h2>
					</div>
					<div>
						<img
							src={producto.url || producto.images}
							alt={producto.name}
							layout='responsive'
							style={{
								width: '150%',
								objectFit: 'contain',
								height: '200px',
								cursor: 'pointer',
							}}
							onClick={handleClick} // add onClick event listener to the image
						/>
						{showZoomedIn && ( // show the zoomed-in image if the state is true
							<div
								style={{
									position: 'fixed',
									top: 0,
									left: 0,
									right: 0,
									bottom: 0,
									zIndex: 999,
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									backgroundColor: 'rgba(0, 0, 0, 0.8)', // add a semi-transparent background to the zoomed-in image
								}}
								onClick={handleClick} // add onClick event listener to the zoomed-in image to hide it when clicked
							>
								<img
									src={producto.url || producto.images}
									alt={producto.name}
									style={{ maxHeight: '90%', maxWidth: '90%' }} // limit the size of the zoomed-in image
								/>
							</div>
						)}
					</div>
					<div className='my-1'>
						<p className=' first-letter:capitalize'>
							{producto.desc || producto.description}
						</p>
						<p className='mt-2 text-slate-700'>
							Talla:{' '}
							<span className='font-semibold'>
								{producto.size || producto.sizes}
							</span>
						</p>
						<p className='mt-2 text-slate-700 font-bold'>
							{producto.price}.00 €
						</p>
						<div className='flex justify-around mt-3'>
							{/* <button
								className='bg-red-400 px-2 rounded'
								onClick={deleteProduct}
							>
								Eliminar
							</button> */}
							<button
								// style={{ backgroundColor: '#FBF1EE ' }}
								className='bg-btnVolver text-btnText text-lg border-gray-400 shadow-md px-8 py-2 rounded hover:shadow-lg'
								onClick={() => router.push(`/accesorios/${producto.tipo}`)}
							>
								Volver
							</button>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export async function getServerSideProps({ query: { product } }) {
	const docRef = doc(db, 'producto', product);
	const docSnap = await getDoc(docRef);
	const producto = docSnap.data();

	return {
		props: {
			producto: producto,
		},
	};
}
