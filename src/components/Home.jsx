import React, { Suspense, useState } from 'react';
import { tabs } from '../App';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import cx from 'classnames';
import { useQuery } from '@tanstack/react-query';
const Home = ({ selected }) => {
	const navigate = useNavigate();
	const { data, error, isLoading } = useQuery({
		queryKey: ['news'],
		queryFn: async () => {
			const resp = await axios.get('http://localhost:8000/api/article-list');
			return resp.data;
		},
		onSuccess: (value) => console.log(value),
	});
	const index = selected == 'Other News' ? 1 : 0;
	return (
		<Suspense fallback={<p>loading...</p>}>
			<div className='w-full h-screen'>
				<header className='text-gray-600 body-font z-30 sticky top-0 bg-white m-0'>
					<div className='container mx-auto flex flex-wrap px-4 pt-4 pb-2 flex-col md:flex-row items-center'>
						<a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								className='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full'
								viewBox='0 0 24 24'>
								<path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
							</svg>
							<span className='ml-3 text-xl'>OpenNews</span>
						</a>
						<nav className='md:ml-auto flex flex-wrap items-center text-base justify-center '>
							{tabs.map(({ name, slug }) => (
								<a
									onClick={() => navigate(`/${slug}`)}
									key={name}
									className={cx(
										'pr-5 hover:text-gray-900 cursor-pointer text-md transition-colors ease-in-out',
										{
											'text-gray-900 underline underline-offset-4 font-medium':
												selected == name,
										}
									)}>
									{name}
								</a>
							))}
						</nav>
						<button className='inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'>
							Sign in
							<svg
								fill='none'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								className='w-4 h-4 ml-1'
								viewBox='0 0 24 24'>
								<path d='M5 12h14M12 5l7 7-7 7'></path>
							</svg>
						</button>
					</div>
				</header>
				<section className='text-gray-600 body-font'>
					<div className='container px-5 py-4 mx-auto flex flex-wrap'>
						<div className='flex w-full mb-5 flex-wrap'>
							<h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4'>
								{data[index].headline}
							</h1>
							<p className='lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base'>
								{data[index].introduction}
							</p>
						</div>
						<div className='flex flex-wrap md:-m-2 -m-1'>
							<div className='flex flex-wrap w-1/2'>
								<div className='md:p-2 p-1 w-1/2'>
									<img
										alt='gallery'
										className='w-full object-cover h-full object-center block'
										src='https://dummyimage.com/500x300'
									/>
								</div>
								<div className='md:p-2 p-1 w-1/2'>
									<img
										alt='gallery'
										className='w-full object-cover h-full object-center block'
										src='https://dummyimage.com/501x301'
									/>
								</div>
								<div className='md:p-2 p-1 w-full'>
									<img
										alt='gallery'
										className='w-full h-full object-cover object-center block'
										src='https://dummyimage.com/600x360'
									/>
								</div>
							</div>
							<div className='flex flex-wrap w-1/2'>
								<div className='md:p-2 p-1 w-full'>
									<img
										alt='gallery'
										className='w-full h-full object-cover object-center block'
										src='https://dummyimage.com/601x361'
									/>
								</div>
								<div className='md:p-2 p-1 w-1/2'>
									<img
										alt='gallery'
										className='w-full object-cover h-full object-center block'
										src='https://dummyimage.com/502x302'
									/>
								</div>
								<div className='md:p-2 p-1 w-1/2'>
									<img
										alt='gallery'
										className='w-full object-cover h-full object-center block'
										src='https://dummyimage.com/503x303'
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='text-gray-600 body-font'>
					<div className='container px-5 py-4 mx-auto'>
						<div className='flex flex-wrap -m-4'>
							<div className='lg:w-1/3 sm:w-1/2 p-4'>
								<div className='flex relative'>
									<img
										alt='gallery'
										className='absolute inset-0 w-full h-full object-cover object-center'
										src='https://dummyimage.com/600x360'
									/>
									<div className='px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100'>
										<h2 className='tracking-widest text-sm title-font font-medium text-indigo-500 mb-1'>
											THE SUBTITLE
										</h2>
										<h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
											Shooting Stars
										</h1>
										<p className='leading-relaxed'>
											Photo booth fam kinfolk cold-pressed sriracha leggings
											jianbing microdosing tousled waistcoat.
										</p>
									</div>
								</div>
							</div>
							<div className='lg:w-1/3 sm:w-1/2 p-4'>
								<div className='flex relative'>
									<img
										alt='gallery'
										className='absolute inset-0 w-full h-full object-cover object-center'
										src='https://dummyimage.com/601x361'
									/>
									<div className='px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100'>
										<h2 className='tracking-widest text-sm title-font font-medium text-indigo-500 mb-1'>
											THE SUBTITLE
										</h2>
										<h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
											The Catalyzer
										</h1>
										<p className='leading-relaxed'>
											Photo booth fam kinfolk cold-pressed sriracha leggings
											jianbing microdosing tousled waistcoat.
										</p>
									</div>
								</div>
							</div>
							<div className='lg:w-1/3 sm:w-1/2 p-4'>
								<div className='flex relative'>
									<img
										alt='gallery'
										className='absolute inset-0 w-full h-full object-cover object-center'
										src='https://dummyimage.com/603x363'
									/>
									<div className='px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100'>
										<h2 className='tracking-widest text-sm title-font font-medium text-indigo-500 mb-1'>
											THE SUBTITLE
										</h2>
										<h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
											The 400 Blows
										</h1>
										<p className='leading-relaxed'>
											Photo booth fam kinfolk cold-pressed sriracha leggings
											jianbing microdosing tousled waistcoat.
										</p>
									</div>
								</div>
							</div>
							<div className='lg:w-1/3 sm:w-1/2 p-4'>
								<div className='flex relative'>
									<img
										alt='gallery'
										className='absolute inset-0 w-full h-full object-cover object-center'
										src='https://dummyimage.com/602x362'
									/>
									<div className='px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100'>
										<h2 className='tracking-widest text-sm title-font font-medium text-indigo-500 mb-1'>
											THE SUBTITLE
										</h2>
										<h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
											Neptune
										</h1>
										<p className='leading-relaxed'>
											Photo booth fam kinfolk cold-pressed sriracha leggings
											jianbing microdosing tousled waistcoat.
										</p>
									</div>
								</div>
							</div>
							<div className='lg:w-1/3 sm:w-1/2 p-4'>
								<div className='flex relative'>
									<img
										alt='gallery'
										className='absolute inset-0 w-full h-full object-cover object-center'
										src='https://dummyimage.com/605x365'
									/>
									<div className='px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100'>
										<h2 className='tracking-widest text-sm title-font font-medium text-indigo-500 mb-1'>
											THE SUBTITLE
										</h2>
										<h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
											Holden Caulfield
										</h1>
										<p className='leading-relaxed'>
											Photo booth fam kinfolk cold-pressed sriracha leggings
											jianbing microdosing tousled waistcoat.
										</p>
									</div>
								</div>
							</div>
							<div className='lg:w-1/3 sm:w-1/2 p-4'>
								<div className='flex relative'>
									<img
										alt='gallery'
										className='absolute inset-0 w-full h-full object-cover object-center'
										src='https://dummyimage.com/606x366'
									/>
									<div className='px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100'>
										<h2 className='tracking-widest text-sm title-font font-medium text-indigo-500 mb-1'>
											THE SUBTITLE
										</h2>
										<h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
											Alper Kamu
										</h1>
										<p className='leading-relaxed'>
											Photo booth fam kinfolk cold-pressed sriracha leggings
											jianbing microdosing tousled waistcoat.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</Suspense>
	);
};

export default Home;
