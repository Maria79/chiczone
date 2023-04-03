import Head from 'next/head';
import Layout from '../components/underConstruction/Layout';
import Hero from '../components/underConstruction/Hero';
// import Facebook from '../components/underConstruction/facebook';
import Menu from '../components/Menu/menu';

export default function Home() {
	// const router = useRouter();
	return (
		<div>
			<Head>
				<title>ChicZone - Boutique de moda femenina. </title>
				<meta name='description' content='ChicZone - Tienda de ropa' />
				<meta property='og:type' content='website' />
				<meta
					property='og:title'
					content='Tienda de ropa de mujer en el centro del Puerto de la Cruz.'
				/>
				<meta
					property='og:image'
					content='https://www.chiczone.es/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-medio-blanco.57a6de3e.png&w=64&q=75'
				/>
				<meta
					property='og:description'
					content='Tienda de ropa en el centro del Puerto de la Cruz.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Hero />
		</div>
	);
}
