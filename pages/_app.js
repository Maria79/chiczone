import Script from 'next/script';
import '../styles/globals.css';
import '../styles/hero.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Script
				async
				defer
				crossorigin='anonymous'
				src='https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v15.0&appId=628218655367035&autoLogAppEvents=1'
				nonce='OMzAkZQZ'
			/>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
