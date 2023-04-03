import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Link from 'next/link';

function Menu() {
	return (
		<div className='max-w-2xl w-full mx-auto pl-8 py-4 rounded-lg bg-slate-50 shadow-sm'>
			<ul className='flex flex-col gap-4 my-10'>
				<li className='text-menu-link flex items-center hover:text-slate-600 cursor-pointer'>
					<ArrowRightIcon></ArrowRightIcon>
					<Link href='/pantalon'>Pantalón</Link>
				</li>
				<li className='text-menu-link flex items-center hover:text-slate-600 cursor-pointer'>
					<ArrowRightIcon></ArrowRightIcon>
					<Link href='/camisetas'>Camisetas </Link>
				</li>
				<li className='text-menu-link flex items-center hover:text-slate-600 cursor-pointer'>
					<ArrowRightIcon></ArrowRightIcon>
					<Link href='/blusas'>Blusas </Link>
				</li>
				<li className='text-menu-link flex items-center cursor-pointer hover:text-slate-600 '>
					<ArrowRightIcon></ArrowRightIcon>
					<Link href='/vestidos'>Vestidos </Link>
				</li>
				<li className='text-menu-link flex items-center cursor-pointer hover:text-slate-600 '>
					<ArrowRightIcon></ArrowRightIcon>
					<Link href='/chalecos'>Chalecos </Link>
				</li>
				<li className='text-menu-link flex items-center cursor-pointer hover:text-slate-600 '>
					<ArrowRightIcon></ArrowRightIcon>
					<Link href='/abrigos'>Abrigos </Link>
				</li>
				{/* <li className='text-menu-link flex items-center cursor-pointer hover:text-slate-600 '>
					<ArrowRightIcon></ArrowRightIcon>
					<Link href='/accesorios'>Accesorios </Link>
				</li> */}
				{/* <li className='text-menu-link flex items-center hover:text-slate-600 cursor-pointer'>
					<ArrowRightIcon></ArrowRightIcon>
					<Link href='/productos'>Prendas </Link>
				</li> */}
			</ul>
		</div>
	);
}

export default Menu;
