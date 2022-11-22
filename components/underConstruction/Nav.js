import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../images/logo-medio-blanco.png';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';

function Nav() {
	return (
		<header className=''>
			<div className='flex relative'>
				<div className='absolute w-full z-20 top-2'>
					<div className='flex justify-start px-6 items-center'>
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
							<FacebookOutlinedIcon className='text-blue-600 mr-3 text-3xl cursor-pointer hover:scale-125'>
								<Link
									href='https://www.facebook.com/profile.php?id=100083016798580'
									target='_blank'
								></Link>
							</FacebookOutlinedIcon>
							<InstagramIcon className=' text-pink-500 text-3xl cursor-pointer hover:scale-125'>
								<Link target='_blank'></Link>
							</InstagramIcon>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Nav;
