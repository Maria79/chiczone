import Link from 'next/link';
import React from 'react';
import {
	EnvelopeOpenIcon,
	PhoneIcon,
	ChatBubbleOvalLeftIcon,
} from '@heroicons/react/24/outline';

function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<footer className='z-10 bg-gray-800 text-white py-4 bottom-0 mt-auto'>
			<div className='container mx-auto px-4 flex flex-wrap justify-between items-center'>
				<p className='text-center sm:text-left'>
					&copy; {new Date().getFullYear()} Chic Zone. All Rights Reserved.
				</p>
				<div className='flex justify-center sm:justify-end items-center mt-2 sm:mt-0'>
					<p className='mr-4 flex'>
						{/* Email:{' '} */}
						<EnvelopeOpenIcon className='h-5 w-5 mr-2' />
						<a href='mailto:chiczonepuerto@gmail.com'>
							chiczonepuerto@gmail.com
						</a>
					</p>
					<p className='mr-4 flex'>
						<PhoneIcon className='h-5 w-5 mr-2' />{' '}
						<a href='tel:+34922984288'>922 98 42 88</a>
					</p>
					<p className='ml-4 flex'>
						<ChatBubbleOvalLeftIcon className='h-5 w-5 mr-2' />{' '}
						<a href='https://wa.me/+34634309049'>634 30 90 49</a>
					</p>
				</div>
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
