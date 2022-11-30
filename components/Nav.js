import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../components/images/logo-cir-trans.png';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Menu from './Menu/menu';

//
function Nav() {
	const [open, setOpen] = useState(true);
	const handleMenu = () => {
		if (open == true) {
			setOpen(false);
		} else {
			setOpen(true);
		}
	};

	//
	return (
		<header className='fixed w-full h-8 top-0 bg-white'>
			<div className='flex max-w-2xl mx-auto relative'>
				<div className='absolute bg-white w-full z-20 top-2'>
					<div className='flex bg-white justify-start px-6'>
						<Link href='/'>
							<div className='rounded-full'>
								<Image
									src={Logo}
									alt='Logo'
									width={55}
									height={55}
									className='rounded-full'
								/>
							</div>
						</Link>
						<div className='flex ml-auto'>
							<Link
								href='https://www.facebook.com/profile.php?id=100083016798580'
								target='_blank'
								rel='noopener noreferrer'
							>
								<FacebookOutlinedIcon className='text-blue-600 mr-3 text-3xl cursor-pointer hover:scale-125'></FacebookOutlinedIcon>
							</Link>
							<Link
								target='_blank'
								href='https://www.instagram.com/chiczone_puerto/'
							>
								<InstagramIcon className=' text-pink-500 text-3xl cursor-pointer hover:scale-125'></InstagramIcon>
							</Link>
							<div onClick={handleMenu}>
								{open ? (
									<MenuIcon className='text-3xl ml-3 text-slate-800 cursor-pointer hover:scale-125'></MenuIcon>
								) : (
									<div>
										<CloseIcon className='text-3xl ml-3 text-slate-800 cursor-pointer hover:scale-125'></CloseIcon>
										<div className='absolute top-14 left-0 w-full'>
											<Menu />
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Nav;
