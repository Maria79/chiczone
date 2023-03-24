/* eslint-disable @next/next/no-img-element */
// @refresh reset
import Head from 'next/head';
import Image from 'next/image';
// import Layout from '../components/Layout';
import Layout from '../components/underConstruction/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarHalfIcon from '@mui/icons-material/StarHalf';

//importar firebase
import firebaseApp from '../firebase';
import {
	getFirestore,
	query,
	collection,
	getDocs,
	where,
} from 'firebase/firestore';
// import { async } from '@firebase/util';
import { getStorage } from 'firebase/storage';

const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

//
function Combinados({ productos }) {
	const router = useRouter();

	return (
		<Layout>
			<div className='xs:mt-24 xs:w-full xs:px-3 xl:max-w-6xl xl:mx-auto'>
				<div className='xs:w-full w-3/4 flex flex-wrap gap-2 justify-center mx-auto'>
					{productos.map((product) => (
						<div
							className='mb-5 flex-1 mx-2 w-32 px-2 py-2 rounded-xl'
							key={product.id}
						>
							<div className=''></div>
							<img src={product.url} alt='img' className='rounded-lg' />
							<div>
								<StarRateIcon className='text-sm text-amber-400'></StarRateIcon>
								<StarRateIcon className='text-sm text-amber-400'></StarRateIcon>
								<StarRateIcon className='text-sm text-amber-400'></StarRateIcon>
								<StarRateIcon className='text-sm text-amber-400'></StarRateIcon>
								<StarHalfIcon className='text-sm text-amber-400'></StarHalfIcon>
							</div>
							<h5 className='text-lg font-bold mt-2 mb-1 truncate xs:text-sm'>
								{product.name}
							</h5>
							{/* <div className='text'>
								<p>{product.desc}</p>
							</div> */}
							<div className=' font-medium mb-2 xs:text-sm'>
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

export default Combinados;

export const getServerSideProps = async (context) => {
	const q = query(
		collection(db, 'producto'),
		where('selected', '==', 'combinado')
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
