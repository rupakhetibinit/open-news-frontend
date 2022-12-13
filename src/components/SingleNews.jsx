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
		onSuccess: (v) => console.log(v),
		onSettled: (data) => console.log(data),
	});
	if (isLoading) return null;
	return (
		<Suspense fallback={<p>loading...</p>}>
			<div className='flex flex-col overflow-y-scroll p-4'>
				<Navbar />
				<div className='flex flex-col items-center'>
					<h1 className='text-2xl my-2'>{data.headline}</h1>
					<img
						className=' h-[60vh] w-fit mb-2'
						src={'http://localhost:8000' + data.image}
						alt={data.headline}
					/>
					<p className='mb-2'>{data.introduction}</p>
					<p className='mb-2'>{data.body}</p>
					<p className='mb-2'>{data.conclusion}</p>
					<span className='flex mb-2 items-center'>
						<p>by &nbsp;</p>
						<h3 className='text-xl'>{data.byline}</h3>
					</span>
				</div>
			</div>
		</Suspense>
	);
};

export default SingleNews;
