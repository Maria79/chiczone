import React from 'react';
import Footer from './footer';
import Nav from './Nav';

function Layout({ children }) {
	return (
		<div className='flex flex-col min-h-screen w-full'>
			<Nav />
			<main className='flex-1 bg-body'>{children}</main>
			<Footer />
		</div>
	);
}

export default Layout;
