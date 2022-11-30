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
				<title>ChicZone</title>
				<meta name='description' content='ChicZone - Tienda de ropa' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Hero />
			{/* <Facebook /> */}
		</Layout>
	);
}
