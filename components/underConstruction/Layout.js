import React from 'react';
import Footer from './footer';
import Nav from './Nav';

function Layout({ children }) {
	return (
		<div className='w-full'>
			<Nav />
			<main>{children}</main>
			{/* <Footer /> */}
		</div>
	);
}

export default Layout;
