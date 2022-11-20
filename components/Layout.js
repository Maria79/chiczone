import React from 'react';
import Nav from './Nav';

function Layout({ children }) {
	return (
		<div className='w-full'>
			<Nav />
			{children}
		</div>
	);
}

export default Layout;
