import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../components/images/logo-cir-trans.png';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Nav() {
	//esta funcion lo que hace es ayudarnos con el error de bootstrap

	return (
		<header className='flex flex-col h-3/5'>
			{/* <div className='w-full flex bg-slate-600 px-3'>
				<div className='flex justify-between items-center text-xs w-3/4 mx-auto xs:w-full xs:px-1'>
					<address className=' hover:text-red-300'>
						<Link
							href='https://goo.gl/maps/NFAPjcQcJrraN4tb9'
							target='_blank'
							rel='noopener noreferrer'
						>
							C. de Zamora, 13, Puerto de la Cruz
						</Link>
					</address>
					<Link
						className='hover:text-red-300 sm:flex xs:hidden'
						href='tel:+34922984288'
					>
						Contacto: 922 984288
					</Link>
					<WhatsAppIcon
						className='sm:hidden text-green-700 text-xl'
						href='tel:+34922984288'
					></WhatsAppIcon>
				</div>
			</div> */}

			{/* navbar */}
			<div className=' sm:w-3/4 mx-auto  mt-2 flex xs:w-full'>
				{/* Logo */}
				<div className='w-20 h-20 relative'>
					<Link href='/'>
						<Image src={Logo} alt='Logo' fill />
					</Link>
				</div>

				{/* Nav */}
				<nav className='hidden'>
					<ul className='flex gap-1'>
						<Link href='/ropa' legacyBehavior>
							<a className=''>Ropa</a>
						</Link>
						<Link href='/accesorios' legacyBehavior>
							<a className=''>Accesorios</a>
						</Link>
						<Link href='/novedades' legacyBehavior>
							<a className=''>Novedades</a>
						</Link>
					</ul>
				</nav>

				{/* second-nav */}
				{/* <div className='flex'>
					<Link href='/productos'>
						<button
							className='bg-gray-300 px-1
						 py 1 text-xs'
						>
							Productos
						</button>
					</Link>
					<Link href='/formulario'>
						<button className='bg-gray-300 px-1 py 1 text-xs'>
							Formulario
						</button>
					</Link>
				</div> */}
				{/*  */}
			</div>
		</header>
	);
}

export default Nav;
