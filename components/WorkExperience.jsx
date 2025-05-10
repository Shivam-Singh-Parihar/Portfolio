import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

export default function WorkExperience() {
	const [activeStatus, setActiveStatus] = useState(2);
	return (
		<div className='p-4 mt-9'>
			<h3 className='title text-center md:text-7xl text-4xl'>
				WORK EXPERIENCE
			</h3>
			<div className='flex flex-row  rounded shadow mt-4'>
				<div className=' flex-col flex-wrap  sm:block rounded shadow w-[30%]'>
					<div className=' xl:mx-0 pl-5 pr-5  '>
						<ul className='flex flex-col gap-y-5'>
							<li
								onClick={() => setActiveStatus(2)}
								className={
									activeStatus === 2
										? 'text-sm text-hoverLight dark:text-hoverDark flex flex-col justify-between border-hoverLight dark:border-hoverDark pt-3 rounded-t mr-10 font-normal'
										: 'text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-hoverLight dark:hover:text-hoverDark'
								}
							>
								<span className='mb-3 cursor-pointer'>
									{activeStatus === 2
										? 'Yasham Software Services Pvt Ltd'
										: 'Yasham Software Services Pvt Ltd'}
								</span>
								{activeStatus === 2 && (
									<div className='w-full h-1 bg-hoverLight dark:bg-hoverDark rounded-t-md' />
								)}
							</li>
							<li
								onClick={() => setActiveStatus(3)}
								className={
									activeStatus === 3
										? 'text-sm text-hoverLight dark:text-hoverDark flex flex-col justify-between border-hoverLight dark:border-hoverDark pt-3 rounded-t mr-10 font-normal'
										: 'text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-hoverLight dark:hover:text-hoverDark'
								}
							>
								<span className='mb-3 cursor-pointer'>
									{activeStatus === 3
										? 'Hyphun Technologies Private Limited'
										: 'Hyphun Technologies Private Limited'}
								</span>
								{activeStatus === 3 && (
									<div className='w-full h-1 bg-hoverLight dark:bg-hoverDark rounded-t-md' />
								)}
							</li>
							{/* <li
								onClick={() => setActiveStatus(4)}
								className={
									activeStatus === 4
										? 'text-sm text-hoverLight dark:text-hoverDark flex flex-col justify-between border-hoverLight dark:border-hoverDark pt-3 rounded-t mr-10 font-normal'
										: 'text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-hoverLight dark:hover:text-hoverDark'
								}
							>
								<span className='mb-3 cursor-pointer'>
									{activeStatus === 4 ? 'ICE Infotech' : 'ICE Infotech'}
								</span>
								{activeStatus === 4 && (
									<div className='w-full h-1 bg-hoverLight dark:bg-hoverDark rounded-t-md' />
								)}
							</li> */}
						</ul>
					</div>
				</div>
				<div className='flex m-4  w-[70%]'>
					{activeStatus === 4 ? (
						<div>
							<p>
								Web Developer{' '}
								<a
									href='https://www.iceinfotech.in/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<b className='dark:text-hoverDark text-hoverLight'>
										@ ICE Infotech
									</b>
								</a>
							</p>
							<ul className='my-3 flex flex-col gap-x-6'>
								<li className='flex gap-4 my-2'>
									<span><FaArrowRight className='dark:text-hoverDark text-hoverLight mt-2' /></span>
									<p className='text-base'>
										Learn Basic Website development with Html, CSS, JavaScript &
										PHP.
									</p>
								</li>
								<li className='flex gap-4 my-2'>
									{/* <p>Projects</p> */}
									<span><FaArrowRight className='dark:text-hoverDark text-hoverLight mt-2' /></span>
									<p className='text-base'>
										Learn Basic HTML, CSS, JavaScript, MySQL And PHP,
									</p>
								</li>
								<li className='flex gap-4 my-2'>
									<span><FaArrowRight className='dark:text-hoverDark text-hoverLight mt-2' /></span>
									<p className='text-base'>Improve Problem Solving Technics.</p>
								</li>
								<li className='flex gap-4 my-2'>
									<span><FaArrowRight className='dark:text-hoverDark text-hoverLight mt-2' /></span>
									<p className='text-base'>Learn CodeIgniter PHP Framework</p>
								</li>
							</ul>
						</div>
					) : activeStatus === 3 ? (
						<div>
    <p>
        Full-Stack Developer 
        <a
            href='https://hyphun.com/'
            target='_blank'
            rel='noopener noreferrer'
        >
            <b className='dark:text-hoverDark text-hoverLight'>
                @ Hyphun Technology
            </b>
        </a>
    </p>
    <ul className='my-3 flex flex-col gap-x-6'>
        <li className='flex gap-4 my-2'>
            <span><FaArrowRight className='dark:text-hoverDark text-hoverLight mt-2' /></span>
            <p className='text-base'>
                Coin Stock project: Worked on the development and implementation of Coin Stock features.
            </p>
        </li>
        <li className='flex gap-4 my-2'>
            <span><FaArrowRight className='dark:text-hoverDark text-hoverLight mt-2' /></span>
            <p className='text-base'>
                Blogs project: Developed and managed blog functionalities, ensuring seamless content management.
            </p>
        </li>
        <li className='flex gap-4 my-2'>
            <span><FaArrowRight className='dark:text-hoverDark text-hoverLight mt-2' /></span>
            <p className='text-base'>
                IMEI project: Worked on implementing and managing the IMEI project for efficient data handling.
            </p>
        </li>
        <li className='flex gap-4 my-2'>
            <span><FaArrowRight className='dark:text-hoverDark text-hoverLight mt-2' /></span>
            <p className='text-base'>
                Bank reviews: Developed comprehensive bank review functionalities, including comparison features.
            </p>
        </li>
        <li className='flex gap-4 my-2'>
            <span><FaArrowRight className='dark:text-hoverDark text-hoverLight mt-2' /></span>
            <p className='text-base'>
                Hyphun and Hyphun Consultancy: Contributed to various projects under Hyphun and Hyphun Consultancy.
            </p>
        </li>
		<li className='flex gap-4 my-2'>
            <span><FaArrowRight className='dark:text-hoverDark text-hoverLight mt-2' /></span>
            <p className='text-base'>
                Learned Filament in Laravel, enhancing my skills in building efficient admin panels.
            </p>
        </li>
    </ul>
</div>

					) : activeStatus === 2 ? (
						<div>
    <p>
        Full-Stack Developer 
        <a
            href='https://yashams.com/'
            target='_blank'
            rel='noopener noreferrer'
        >
            <b className='dark:text-hoverDark text-hoverLight'>
                @ Yasham Software Services Pvt Ltd
            </b>
        </a>
    </p>
    <ul className='my-3 flex flex-col gap-x-6'>
        <li className='flex gap-4 my-2'>
            <span><FaArrowRight className='dark:text-hoverDark text-hoverLight mt-2' /></span>
            <p className='text-base'>
                Realispat (March-June 2023): Upgraded to Laravel 9, added role management, dealer
                data handling, and UI improvements.
            </p>
        </li>
        <li className='flex gap-4 my-2'>
            <span><FaArrowRight className='dark:text-hoverDark text-hoverLight mt-2' /></span>
            <p className='text-base'>
                Hindu Seva Samit (July-October 2023): Designed UI, implemented user authentication, and
                admin-controlled user-blocking.
            </p>
        </li>
        <li className='flex gap-4 my-2'>
            <span><FaArrowRight className='dark:text-hoverDark text-hoverLight mt-2' /></span>
            <p className='text-base'>
                Dev Bhumi (Sept-Oct 2023): Worked on resort management, enabling room booking
                and reservations.
            </p>
        </li>
        <li className='flex gap-4 my-2'>
            <span><FaArrowRight className='dark:text-hoverDark text-hoverLight mt-2' /></span>
            <p className='text-base'>
                Smileich (Oct 2023): Converted Smileich from ASP.NET to Laravel and added
                booking functionality.
            </p>
        </li>
        <li className='flex gap-4 my-2'>
            <span><FaArrowRight className='dark:text-hoverDark text-hoverLight mt-2' /></span>
            <p className='text-base'>
                MoparConnectionMagazine.com: Integrated WooCommerce and payment gateway for
                e-commerce.
            </p>
        </li>
        <li className='flex gap-4 my-2'>
            <span><FaArrowRight className='dark:text-hoverDark text-hoverLight mt-2' /></span>
            <p className='text-base'>
                Stannscommunity.com: Implemented a chatbot for user interaction.
            </p>
        </li>
        <li className='flex gap-4 my-2'>
            <span><FaArrowRight className='dark:text-hoverDark text-hoverLight mt-2' /></span>
            <p className='text-base'>
                cmacevents.com: Fixed event screen data fetching issue by category.
            </p>
        </li>
    </ul>
</div>

					) : (
						''
					)}
				</div>
			</div>
		</div>
	);
}
