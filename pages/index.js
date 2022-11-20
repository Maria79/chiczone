import Head from 'next/head';
import Layout from '../components/underConstruction/Layout';
import Hero from '../components/underConstruction/Hero';

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
		</Layout>
	);
}
