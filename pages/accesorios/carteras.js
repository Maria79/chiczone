/* eslint-disable @next/next/no-img-element */
// @refresh reset
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/underConstruction/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';

//importar firebase
import firebaseApp from '../../firebase';
import {
	getFirestore,
	query,
	collection,
	getDocs,
	where,
	orderBy,
} from 'firebase/firestore';
// import { async } from '@firebase/util';
import { getStorage } from 'firebase/storage';

const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export default function Accesorios({ productos }) {
	const router = useRouter();

	return (
		<Layout>
			<Head>
				<title>CZ Accesorios</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='xs:w-full xs:px-3 xl:max-w-6xl xl:mx-auto'>
				<div className='pt-32 grid xs:grid-cols-1 xs:gap-6 xs:px-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-6'>
					{productos.map((product) => (
						<div className='mx-2 px-2 pb-6 rounded-xl' key={product.id}>
							<div className='lg:mb-10 flex justify-center'>
								<img
									src={product.images || product.url}
									alt='img'
									// layout='responsive'
									style={{
										width: '100%',
										objectFit: 'contain',
										height: '150px',
										borderRadius: '15%',
									}}
								/>
							</div>
							<h5 className='capitalize font-bold mt-4 mb-1 pl-5 truncate xs:text-md xl:text-xl'>
								{product.name}
							</h5>
							<div className=' font-semibold mb-2 pl-5 xs:text-sm'>
								<p>{product.price}.00 €</p>
							</div>

							<div className='justify-center flex'>
								<button
									className='bg-btn px-8 py-2  rounded text-white bottom-1'
									onClick={() => router.push(`/producto/${product.id}`)}
								>
									Ver prenda
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
	const q = query(
		collection(db, 'producto'),
		where('tipo', '==', 'accesorios-carteras'),
		orderBy('name', 'asc')
	);
	const querySnapshot = await getDocs(q);
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
