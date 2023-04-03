import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../images/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import Menu from '../Menu/menu';

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
		<header className='relative z-20'>
			<div className='fixed w-full h-20 bg-white top-0'>
				<div className='flex relative max-w-6xl mx-auto'>
					<div className='absolute w-full z-20 top-0'>
						<div className='w-full bg-white h-20 mx-0 flex items-center justify-between px-4 '>
							<Link href='/'>
								<Image src={Logo} alt='logo' width={175} />
							</Link>
							<div className='flex items-center'>
								{/* <ShoppingBasketIcon></ShoppingBasketIcon> */}
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
			</div>
		</header>
	);
}

export default Nav;
