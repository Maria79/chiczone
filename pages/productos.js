/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/underConstruction/Layout';
// import Layout from '../components/Layout';

import Link from 'next/link';
import { useRouter } from 'next/router';

//importar firebase
import firebaseApp from '../firebase';
import {
	getFirestore,
	query,
	collection,
	addDoc,
	getDocs,
	doc,
	deleteDoc,
	getDoc,
	setDoc,
	where,
} from 'firebase/firestore';
import { async } from '@firebase/util';
import { getStorage } from 'firebase/storage';

const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

//
export default function Productos({ productos }) {
	const router = useRouter();

	return (
		<Layout>
			{/* <Head>
				<title>CZ Productos</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head> */}
			<div className='xs:w-full xs:px-3 xl:max-w-6xl xl:mx-auto'>
				{/* <div className='max-w-6xl xs:mt-24 flex flex-wrap gap-2 justify-center mx-auto xs:w-full '> */}
				<div className='pt-24 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:gap-4'>
					{productos.map((product) => (
						<div
							className='mb-5 mx-2 border-2 px-2 py-2 rounded-xl'
							key={product.id}
						>
							<div className='w-full flex justify-center'>
								<img
									src={product.images || product.url}
									alt='img'
									className='rounded-lg'
									layout='responsive'
									style={{
										width: '100%',
										objectFit: 'cover',
										height: '250px',
									}}
								/>
							</div>
							<h5 className='font-bold mt-2 mb-1 truncate xs:text-md xl:text-xl'>
								{product.name}
							</h5>
							<div className=' font-semibold mb-2 xs:text-sm'>
								<p>{product.price} €</p>
							</div>

							<div className='justify-center flex '>
								<button
									className='bg-brownLogo px-3 py-1  rounded text-white  bottom-1'
									onClick={() => router.push(`/producto/${product.id}`)}
								>
									View
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
}

export const getServerSideProps = async (context) => {
	const querySnapshot = await getDocs(collection(db, 'producto'));

	const docs = [];
	querySnapshot.forEach((doc) => {
		docs.push({ ...doc.data(), id: doc.id });
	});

	return {
		props: {
			productos: docs,
		},
	};
};
