import React from 'react';
import Nav from '../underConstruction/Nav';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Link from 'next/link';

function Menu() {
	return (
		<div className='max-w-2xl w-full mx-auto pl-8 py-4 rounded-lg bg-slate-50 shadow-sm'>
			<ul className='flex flex-col gap-2 my-10  '>
				<li className='text-menu-link flex items-center cursor-pointer  hover:text-slate-600'>
					<ArrowRightIcon></ArrowRightIcon>
					<Link href='/combinados'>Combinados</Link>
				</li>
				<li className='text-menu-link flex items-center hover:text-slate-600 cursor-pointer'>
					<ArrowRightIcon></ArrowRightIcon>
					<Link href='/pantalon'>Pantalón</Link>
				</li>
				<li className='text-menu-link flex items-center hover:text-slate-600 cursor-pointer'>
					<ArrowRightIcon></ArrowRightIcon>
					<Link href='/camisas-blusas'>Camisas - Blusas </Link>
				</li>
				<li className='text-menu-link flex items-center cursor-pointer hover:text-slate-600 '>
					<ArrowRightIcon></ArrowRightIcon>
					<Link href='/faldas-vestidos'>Faldas - Vestidos </Link>
				</li>
				<li className='text-menu-link flex items-center hover:text-slate-600 cursor-pointer'>
					<ArrowRightIcon></ArrowRightIcon>
					<Link href='/productos'>Accesorios </Link>
				</li>
			</ul>
		</div>
	);
}

export default Menu;
