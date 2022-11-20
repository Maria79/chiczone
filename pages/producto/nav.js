import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../components/images/logo-cir-trans.png';

function Nav() {
	//esta funcion lo que hace es ayudarnos con el error de bootstrap

	return (
		<header className='w-screen flex flex-col h-3/5 mb-4'>
			<div className='w-full justify-end flex bg-slate-600'>
				<div className='flex text-xs'>
					<address className=' hover:text-red-300'>
						<a
							href='https://goo.gl/maps/NFAPjcQcJrraN4tb9'
							target='_blank'
							rel='noopener noreferrer'
						>
							C. de Zamora, 13, Puerto de la Cruz
						</a>
					</address>
					<a className='hover:text-red-300' href='tel:+34922984288'>
						Contacto: 922 984288
					</a>
				</div>
			</div>

			<div className='flex w-full items-center justify-around'>
				<div className='flex'>
					<Link href='/'>
						<Image src={Logo} alt='Logo' width={90} height={80} />
					</Link>
				</div>
				<nav className='invisible'>
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
				<div className='flex gap-1'>
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
				</div>
			</div>
		</header>
	);
}

export default Nav;
