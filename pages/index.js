import Head from 'next/head';
import Layout from '../components/underConstruction/Layout';
import Hero from '../components/underConstruction/Hero';
// import Facebook from '../components/underConstruction/facebook';
import Menu from '../components/Menu/menu';

export default function Home() {
	// const router = useRouter();
	return (
		<Layout>
			<Head>
				<title>ChicZone - Tienda de ropa </title>
				<meta name='description' content='ChicZone - Tienda de ropa' />
				<meta property='og:type' content='website' />
				<meta
					property='og:title'
					content='Tienda de ropa en el centro del Puerto de la Cruz.'
				/>
				<meta
					property='og:description'
					content='Tienda de ropa en el centro del Puerto de la Cruz.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Hero />
			{/* <Facebook /> */}
		</Layout>
	);
}
