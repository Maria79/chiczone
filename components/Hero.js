// import Link from 'next/link';
import React from 'react';

function Hero() {
	return (
		<div className='hero h-full pt'>
			<div className='hero-body'></div>
			<div className='overlay'></div>
			<div className='anuncio flex flex-col items-center justify-around'>
				<div>
					<h1 className='text-slate-400'>ChicZone</h1>
				</div>
				<div className='bg-bganuncio mt-48 mx-2 text-center px-6 py-8 rounded-xl'>
					<h1 className='uppercase font-bold text-xl text-white px-3 pb-2'>
						Rebajas por Black Friday
					</h1>
					<h2 className='text-lg text-white pb-6 '>
						¡Adelanta tus compras de Navidad!
					</h2>
					<div className='bg-white rounded-lg mb-2'>
						<p className='text-sm py-1'>Desde el 2 al 30 de noviembre 2022</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
// sm:w-56 md:w-2/4 bg-slate-800 px-6 py-10 text-center flex flex-col items-center gap-3
