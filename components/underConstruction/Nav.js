import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../images/logo-cir-trans.png';

function Nav() {
	return (
		<header className=''>
			<div className='flex w-full items-center justify-around relative'>
				<div className='absolute z-20 top-10 bg-slate-300 rounded-full'>
					<Link href='/'>
						<div className=''></div>
						<Image src={Logo} alt='Logo' width={80} height={80} />
					</Link>
				</div>
			</div>
		</header>
	);
}

export default Nav;
