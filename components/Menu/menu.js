import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Link from 'next/link';
import { useState } from 'react';

function Menu() {
	const [showSubMenu, setShowSubMenu] = useState(false);
	return (
		<div className='max-w-2xl w-full mx-auto pl-8 py-4 rounded-lg bg-slate-50 shadow-sm'>
			<ul className='flex flex-col gap-4 my-10'>
				<li className='text-menu-link flex items-center hover:text-slate-600 cursor-pointer'>
					<ArrowRightIcon></ArrowRightIcon>
					<Link href='/pantalon'>Pantalón</Link>
				</li>
				<li className='text-menu-link flex items-center hover:text-slate-600 cursor-pointer'>
					<ArrowRightIcon></ArrowRightIcon>
					<Link href='/camiseta'>Camisetas </Link>
				</li>
				<li className='text-menu-link flex items-center hover:text-slate-600 cursor-pointer'>
					<ArrowRightIcon></ArrowRightIcon>
					<Link href='/blusas'>Blusas </Link>
				</li>
				<li className='text-menu-link flex items-center cursor-pointer hover:text-slate-600 '>
					<ArrowRightIcon></ArrowRightIcon>
					<Link href='/vestido'>Vestidos </Link>
				</li>
				<li className='text-menu-link flex items-center cursor-pointer hover:text-slate-600 '>
					<ArrowRightIcon></ArrowRightIcon>
					<Link href='/chaleco'>Chalecos </Link>
				</li>
				<li className='text-menu-link flex items-center cursor-pointer hover:text-slate-600 '>
					<ArrowRightIcon></ArrowRightIcon>
					<Link href='/abrigo'>Abrigos </Link>
				</li>
				<li
					className='relative menu-item text-menu-link flex items-center cursor-pointer'
					onClick={() => setShowSubMenu(!showSubMenu)}
				>
					<ArrowRightIcon></ArrowRightIcon>
					<div className=''>Accesorios </div>
					<ul
						className={`absolute sub-menu left-28 top-0 ${
							showSubMenu ? '' : 'hidden'
						}`}
					>
						<li className='flex items-center'>
							<ArrowRightIcon></ArrowRightIcon>
							<Link href='/accesorios/bolsos'>
								<div className='text-gray-900 hover:text-gray-500'>Bolsos</div>
							</Link>
						</li>
						<li className='flex items-center'>
							<ArrowRightIcon></ArrowRightIcon>
							<Link href='/accesorios/carteras'>
								<div className='text-gray-900 hover:text-gray-500'>
									Carteras
								</div>
							</Link>
						</li>
						<li className='flex items-center'>
							<ArrowRightIcon></ArrowRightIcon>
							<Link href='/accesorios/cinturon'>
								<div className='text-gray-900 hover:text-gray-500'>
									Cinturón
								</div>
							</Link>
						</li>
					</ul>
				</li>
				{/* <li className='text-menu-link flex items-center hover:text-slate-600 cursor-pointer'>
					<ArrowRightIcon></ArrowRightIcon>
					<Link href='/productos'>Prendas </Link>
				</li> */}
			</ul>
		</div>
	);
}

export default Menu;
