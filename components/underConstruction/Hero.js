// import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import tienda from '../images/tienda-entrada.jpg';
import Layout from './Layout';

function Hero() {
	return (
		<Layout>
			<div>
				<Image src={tienda} className='w-full' alt='' fill />
			</div>
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
		</Layout>
	);
}

export default Hero;
