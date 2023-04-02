import Link from 'next/link';
import React from 'react';

function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<footer className='bg-gray-800 text-white py-4 bottom-0 mt-auto'>
			<div className='container mx-auto px-4'>
				<p>&copy; {currentYear} Chic Zone</p>
			</div>
		</footer>

		// <div className='w-full bg-grislogo absolute bottom-0 py-2 px-0'>
		// 	<div className='flex text-xs'>
		// 		<address className='text-xs hover:text-red-300'>
		// 			<Link
		// 				href='https://goo.gl/maps/NFAPjcQcJrraN4tb9'
		// 				target='_blank'
		// 				rel='noopener noreferrer'
		// 			>
		// 				C. de Zamora, 13, Puerto de la Cruz
		// 			</Link>
		// 		</address>
		// 		<Link className='hover:text-red-300' href='tel:+34922984288'>
		// 			Contacto: 922 984288
		// 		</Link>
		// 	</div>
		// </div>
	);
}

export default Footer;
