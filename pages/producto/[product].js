/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Layout from './layout';
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
		router.push('/');
	};

	return (
		<Layout>
			<div className='flex justify-center mt-6'>
				<div className='w-64 border-2 rounded-md px-3 py-2'>
					<div className='mb-2'>
						<h2 className='text-xl text-slate-700 font-bold capitalize'>
							{producto.name}
						</h2>
					</div>
					<div>
						<img src={producto.url} alt={producto.name} />
					</div>
					<div className=''>
						<p className='mt-4'>{producto.desc}</p>
						<p className='mt-1 text-slate-700'>
							Talla: <span className='font-semibold'>{producto.size}</span>
						</p>
						<p className='mt-1 text-slate-700 font-bold'>{producto.price}€</p>
						<div className='flex justify-around py-3 mt-1'>
							{/* <button
								className='bg-red-400 px-2 rounded'
								onClick={deleteProduct}
							>
								Eliminar
							</button> */}
							<button
								className='border-gray-400 shadow-md px-8 py-2 rounded hover:shadow-lg'
								onClick={() => router.push('/productos')}
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
