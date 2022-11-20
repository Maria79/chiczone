import React from 'react';
import Nav from './nav';

function Layout({ children }) {
	return (
		<div className='w-full'>
			<Nav />
			{children}
		</div>
	);
}

export default Layout;
