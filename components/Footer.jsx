import React from 'react';
import { BsFillHeartFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';
export default function Footer() {
	const { theme, setTheme } = useTheme();
	return (
		<div className='mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-3'>
			<div className='flex flex-col items-center justify-center'>
				<div>
					{theme === 'dark' ? (
						// eslint-disable-next-line @next/next/no-img-element
						<img
							src={
								'https://ik.imagekit.io/shivamsingh45/Portfolio/image.png?updatedAt=1723218869038'
							}
							className='w-[100px]  inline'
							alt='Logo'
						/>
					) : (
						// eslint-disable-next-line @next/next/no-img-element
						<img
							src={
								'https://ik.imagekit.io/shivamsingh45/Portfolio/index.png?updatedAt=1723218576003'
							}
							className='w-[200px]  inline'
							alt='Logo'
						/>
					)}
				</div>

				<div className='flex mt-6 justify-center align-middle'>
					<p>Made With</p>
					{''}
					<BsFillHeartFill className='mx-1 mt-1' color='#FF008A' />
					<p> {''}Shivam Singh</p>
				</div>
			</div>
		</div>
	);
}
