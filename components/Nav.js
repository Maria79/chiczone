import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './images/logo-cir-trans.png';

function Nav() {
	//esta funcion lo que hace es ayudarnos con el error de bootstrap

	return (
		<header className='flex flex-col h-3/5 min-w-full'>
			<div className='w-full justify-end flex bg-slate-600'>
				<div className='flex text-xs pr-6'>
					<address className='text-xs inline pr-4 hover:text-red-300'>
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
						<Image src={Logo} alt='Logo' width={50} height={50} />
					</Link>
				</div>
				<nav className=''>
					<ul className='flex'>
						<li className='px-2'>
							<Link href='/ropa'>Ropa</Link>
						</li>
						<li className='px-2'>
							<Link href='/accesorios'>Accesorios</Link>
						</li>
						<li className='px-2'>
							<Link href='/novedades'>Novedades</Link>
						</li>
					</ul>
				</nav>
				{/* <div className='flex gap-1'>
					<Link href='/productos'>
						<button
							className='bg-gray-300 px-1
						 py 1 text-xs'
						>
							Productos
						</button>
					</Link>
				</div> */}
			</div>
		</header>
	);
}

export default Nav;
