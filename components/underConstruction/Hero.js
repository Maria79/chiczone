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
		<div className='hero h-full relative'>
			<Image
				src={tienda}
				className='absolute min-h-full w-full -z-10'
				alt=''
				fill
			/>
			<div className='overlay'></div>
			<div className='anuncio flex flex-col justify-center'>
				<div className='text-center font-bold'>
					<h1 className='chizone-title text-10xl'>ChicZone</h1>
					<div className='flex flex-col max-w-2xl mx-auto text-gray-800 bg-gray-300 text-xs justify-center py-1'>
						<div className='flex items-center justify-center hover:text-red-300'>
							<PlaceIcon></PlaceIcon>
							<address className='text-sm'>
								<Link
									href='https://goo.gl/maps/NFAPjcQcJrraN4tb9'
									target='_blank'
									rel='noopener noreferrer'
								>
									C. de Zamora, 13, Puerto de la Cruz
								</Link>
							</address>
						</div>
						<div className='flex items-center justify-center'>
							<div className='text-xs  hover:text-red-300'>
								<CallIcon></CallIcon>
								<Link href='tel:+34922984288'>Contacto: 922 984288</Link>
							</div>
							<Link href='https://api.whatsapp.com/send?phone=34634309049'>
								<WhatsAppIcon className='w-7 h-7 text-green-800 ml-2 hover:text-green-600'></WhatsAppIcon>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
