import React, { Suspense, useState } from 'react';
import { tabs } from '../App';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import cx from 'classnames';
import { useQuery } from '@tanstack/react-query';
const Home = ({ selected }) => {
	const navigate = useNavigate();
	const [subArticles, setSubArticles] = useState([]);
	const { data, error, isLoading } = useQuery({
		queryKey: [`news-${selected}`],
		queryFn: async () => {
			const resp = await axios.get(
				`http://localhost:8000/api/article-list/${selected.toLowerCase()}`
			);
			return resp.data;
		},
		onSuccess: (value) => {
			console.log(value);
			const sub = value.slice(2);
			console.log(sub);
			setSubArticles([...sub]);
		},
	});
	const index = selected == 'Other News' ? 1 : 0;
	if (isLoading) return null;
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
									onClick={() => navigate(`/${slug.toLowerCase()}`)}
									key={name}
									className={cx(
										'pr-5 hover:text-gray-900 cursor-pointer text-md transition-colors ease-in-out',
										{
											'text-gray-900 underline underline-offset-4 font-medium':
												selected == slug,
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
				<section className='text-gray-600 flex flex-row body-font justify-center'>
					<ArticleCard {...data[0]} />
					<ArticleCard {...data[1]} />
				</section>
				<section className='text-gray-600 body-font'>
					<div className='container px-5 py-4 mx-auto'>
						<div className='flex flex-wrap -m-4'>
							{subArticles.map((_, i) => (
								<SubArticlesCard key={i} {...subArticles[i]} />
							))}
						</div>
					</div>
				</section>
			</div>
		</Suspense>
	);
};

export default Home;

const ArticleCard = ({ image, introduction, headline, byline }) => {
	return (
		<div className='px-4 py-8 max-w-xl hover:cursor-pointer'>
			<div className='bg-white shadow-2xl rounded-lg mb-6 tracking-wide'>
				<div className='md:flex-shrink-0'>
					<img
						src={image}
						alt='mountains'
						className='w-[40vw] h-96 rounded-lg rounded-b-none object-cover'
					/>
				</div>
				<div className='px-4 py-2 mt-2'>
					<h2 className='font-bold text-2xl text-gray-800 tracking-normal'>
						{headline}
					</h2>
					<p className='text-sm text-gray-700 px-2 mr-1'>{introduction}</p>
					<div className='flex items-center justify-between mt-2 mx-6'>
						<a href='#' className='text-blue-500 text-xs -ml-3 '>
							Show More
						</a>
					</div>
					<div className='author flex items-center -ml-3 my-3'>
						<div className='user-logo'>
							<img
								className='w-12 h-12 object-cover rounded-full mx-4  shadow'
								src='https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80'
								alt='avatar'
							/>
						</div>
						<h2 className='text-sm tracking-tighter text-gray-900'>
							<a>{byline}</a>{' '}
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

const SubArticlesCard = ({ headline, byline, introduction, image }) => {
	return (
		<div className='lg:w-1/3 sm:w-1/2 p-4'>
			<div className='flex relative'>
				<img
					alt='gallery'
					className='absolute inset-0 w-full h-full object-cover object-center'
					src={image}
				/>
				<div className='px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100'>
					<h2 className='tracking-widest text-sm title-font font-medium text-indigo-500 mb-1'>
						{byline}
					</h2>
					<h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
						{headline}
					</h1>
					<p className='leading-relaxed'>{introduction}</p>
				</div>
			</div>
		</div>
	);
};
