import { useQuery } from '@tanstack/react-query';
import React, { Suspense } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import Navbar from './Navbar';
const SingleNews = () => {
	const { id } = useParams();
	const { data, error, isLoading } = useQuery({
		queryKey: [`${id}`],
		queryFn: async () => {
			const resp = await axios.get(
				`http://localhost:8000/api/article-detail/${id}/`
			);
			return resp.data;
		},
		// onSuccess: (v) => console.log(v),
		// onSettled: (data) => console.log(data),
	});
	if (isLoading) return null;
	return (
		<Suspense fallback={<p>loading...</p>}>
			<div className='flex flex-col'>
				<Navbar />
				<div className='flex flex-col items-center'>
					<h1 className='text-4xl font-semibold mt-2 mb-6'>{data.headline}</h1>
					<img
						className='max-w-3xl w-contain mb-2'
						src={'http://localhost:8000' + data.image}
						alt={data.headline}
					/>
					<div className='flex w-1/2 flex-col items-baseline'>
						<p className='mb-4 leading-6 text-md text-gray-800'>
							{data.introduction}
						</p>
						<p className='mb-4 leading-6 text-md text-gray-800'>{data.body}</p>
						<p className='mb-4 leading-6 text-md text-gray-800'>
							{data.conclusion}
						</p>
						<span className='flex mb-2 items-baseline'>
							<p className='text-md'>by &nbsp;</p>
							<h3 className='text-xl font-medium'>{data.byline}</h3>
						</span>
					</div>
				</div>
			</div>
		</Suspense>
	);
};

export default SingleNews;
