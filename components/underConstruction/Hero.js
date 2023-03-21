// import Link from 'next/link';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import tienda from '../images/tienda-entrada.jpg';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import Facebook from './facebook';

function Hero() {
	return (
		<div className=''>
			<Image src={tienda} className='min-h-full w-full -z-10' alt='' fill />
			{/* <div className='relative top-36 z-10'>
				<img
					src='https://prestashop.coderplace.com/PRS01/PRS01022/modules/tm_imageslider/views/img/sample-1.jpg'
					alt=''
				/>
				<div className='absolute top-0 w-1/2 px-3 py-4'>
					<p className='text-xs mb-2'>Shop Trending Collection</p>
					<h3 className='font-semibold mb-2'>SHOP FOR WOMEN GET UP TO 50%</h3>
					<button className='bg-black text-white px-2 py-1'>SHOP NOW</button>
				</div>
			</div> */}
		</div>
	);
}

export default Hero;
