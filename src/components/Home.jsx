import React, { Suspense, useState } from 'react';
import { tabs } from '../App';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import cx from 'classnames';
import { useQuery } from '@tanstack/react-query';
import Navbar from './Navbar';
const Home = ({ selected }) => {
	const navigate = useNavigate();
	const [subArticles, setSubArticles] = useState([]);
	const [mainArticles, setMainArticles] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');
	const { data, error, isLoading } = useQuery({
		queryKey: [`news-${selected}`],
		queryFn: async () => {
			const resp = await axios.get(
				`http://localhost:8000/api/article-list/${selected.toLowerCase()}`
			);
			return resp.data;
		},
		onSuccess: (value) => {
			// console.log(value);
			const sub = value.slice(2);
			const main = value.slice(1, 2);
			// console.log(sub);
			setSubArticles([...sub]);
			setMainArticles([...main]);
		},
	});

	if (isLoading) return null;
	return (
		<Suspense fallback={<p>loading...</p>}>
			<div className='w-full h-screen'>
				<header className='text-gray-600 body-font z-30 sticky top-0 bg-white m-0'>
					<div className='container mx-auto flex flex-wrap px-4 pt-4 pb-2 flex-col md:flex-row items-center'>
						<a className='flex title-font font-medium items-center text-gray-900 md:mb-0'>
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
						{/* Searchbox */}
						<div className='pt-2 relative mx-auto text-gray-600'>
							<input
								className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none'
								type='search'
								name='search'
								placeholder='Search'
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								onKeyDown={(e) => {
									if (e.key === 'Enter') {
										navigate(`/search/${searchQuery}`);
									}
								}}
							/>
							<button
								onClick={() => navigate(`/search/${searchQuery}`)}
								type='submit'
								className='absolute right-0 top-0 mt-5 mr-4'>
								<svg
									className='text-gray-600 h-4 w-4 fill-current'
									xmlns='http://www.w3.org/2000/svg'
									xmlnsXlink='http://www.w3.org/1999/xlink'
									version='1.1'
									id='Capa_1'
									x='0px'
									y='0px'
									viewBox='0 0 56.966 56.966'
									xmlSpace='preserve'
									width='512px'
									height='512px'>
									<path d='M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z' />
								</svg>
							</button>
						</div>
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
						<button
							onClick={() => navigate('/add-news')}
							className='inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'>
							Add News
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

				<section
					className={cx('container grid grid-cols-2 gap-16 px-24 pt-8', {
						'place-items-center grid-cols-1': data.length == 1,
					})}>
					{data.map((item) => (
						<ArticleCard key={JSON.stringify(item)} {...item} />
					))}
				</section>
				{/* <section className='text-gray-600 body-font'>
					<div className='container px-8 py-4 mx-auto'>
						<div className='flex flex-wrap -m-4'>
							{subArticles.map((_, i) => (
								<SubArticlesCard key={i} {...subArticles[i]} />
							))}
						</div>
					</div>
				</section> */}
			</div>
		</Suspense>
	);
};

export default Home;

export const ArticleCard = ({ image, introduction, headline, byline, id }) => {
	const navigate = useNavigate();
	return (
		<div
			onClick={() => navigate(`/articles/${id}`)}
			className='col-span-1 bg-white hover:cursor-pointer hover:scale-105 transition-transform'>
			<div className=' bg-white shadow-2xl rounded-lg mb-6 tracking-wide'>
				<div>
					<img
						src={image}
						alt='mountains'
						className=' rounded-lg rounded-b-none object-cover w-[100%] '
					/>
				</div>
				<div className='text-left px-4 py-2 mt-2'>
					<h2 className='font-semibold text-2xl text-gray-800 tracking-normal'>
						{headline}
					</h2>
					<p className='text-sm text-gray-700 px-2 mr-1'>{introduction}</p>
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

const SubArticlesCard = ({ headline, byline, introduction, image, id }) => {
	const navigate = useNavigate();
	return (
		<div
			onClick={() => navigate(`/articles/${id}`)}
			className='lg:w-1/3 sm:w-1/2 p-4 hover:cursor-pointer '>
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
