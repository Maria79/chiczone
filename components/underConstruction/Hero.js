// import Link from 'next/link';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import tienda from '../images/tienda-entrada.jpg';

function Hero() {
	return (
		<div className='hero h-full'>
			<Image
				src={tienda}
				className='absolute min-h-full w-full -z-10'
				alt=''
				fill
			/>
			<div className='overlay'></div>
			<div className='anuncio flex flex-col justify-center'>
				<div className='text-center font-bold'>
					<h1 className='chizone-title'>ChicZone</h1>
					<div className='flex flex-col text-gray-800 bg-gray-300 text-xs justify-center py-1'>
						<address className='text-xs hover:text-red-300'>
							<Link
								href='https://goo.gl/maps/NFAPjcQcJrraN4tb9'
								target='_blank'
								rel='noopener noreferrer'
							>
								C. de Zamora, 13, Puerto de la Cruz
							</Link>
						</address>
						<div className='text-xs hover:text-red-300'>
							<Link href='tel:+34922984288'>Contacto: 922 984288</Link>
						</div>
					</div>
				</div>
				<div className='bg-bganuncio max-w-xs mx-auto opacity-70  mb-6 mt-8 text-center px-12 py-12 rounded-2xl'>
					<h1 className='uppercase font-bold text-2xl text-white px-3 pb-2'>
						Rebajas por Black Friday
					</h1>
					<h2 className='text-xl text-white pb-6 '>
						¡Adelanta tus compras de Navidad!
					</h2>
					<div className='bg-white rounded-lg mb-2'>
						<p className='text-md py-1'>Desde el 2 al 30 de noviembre 2022</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
// sm:w-56 md:w-2/4 bg-slate-800 px-6 py-10 text-center flex flex-col items-center gap-3
