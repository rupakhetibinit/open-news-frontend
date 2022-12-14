import { useQuery } from '@tanstack/react-query';
import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';
import { ArticleCard } from './Home';
const SearchPage = () => {
	const { query } = useParams();
	const { data, error, isLoading } = useQuery({
		queryKey: [`${query}`],
		queryFn: async () => {
			const resp = await axios.get(
				`http://localhost:8000/api/article-search?search=${query}`
			);
			return resp.data;
		},
	});
	if (isLoading) return null;
	return (
		<Suspense fallback={<p>loading...</p>}>
			<div className='w-full h-screen'>
				<Navbar />

				<section className='container grid grid-cols-2 gap-16 px-24 pt-8 '>
					{data.map((item) => (
						<ArticleCard key={JSON.stringify(item)} {...item} />
					))}
				</section>
			</div>
		</Suspense>
	);
};

export default SearchPage;
