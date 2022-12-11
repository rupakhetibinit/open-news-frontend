import { useState } from 'react';

export default function SignIn() {
	const [signIn, setSignIn] = useState(true);
	return (
		<div className='relative h-screen py-8 dark:bg-slate-800'>
			<div className='container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40'>
				<div className='m-auto space-y-8 md:w-8/12 lg:w-6/12 xl:w-6/12'>
					<img
						src='images/tailus.svg'
						loading='lazy'
						className='ml-4 w-36'
						alt='tailus logo'
					/>
					<div className='rounded-3xl border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 backdrop-blur-2xl'>
						<div className='p-8 py-12 sm:p-16'>
							<h2 className='mb-8 text-2xl font-bold text-gray-800 dark:text-white'>
								{signIn ? 'Sign In to your account' : 'Sign Up for an account'}
							</h2>
							<form action='' className='space-y-8'>
								<div className='space-y-2'>
									<label
										htmlFor='email'
										className='text-gray-600 dark:text-gray-300'>
										Email
									</label>
									<input
										type='email'
										name='email'
										id='email'
										autoComplete='username'
										className='focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300'
									/>
								</div>

								<div>
									<div className='flex items-center justify-between'>
										<label
											htmlFor='pwd'
											className='text-gray-600 dark:text-gray-300 pb-2'>
											Password
										</label>
										{/* <button className='-mr-2 p-2' type='reset'>
											<span className='text-sm text-primary'>
												{signIn:Forgot your password ?}
											</span>
										</button> */}
									</div>
									<input
										type='password'
										name='pwd'
										id='pwd'
										autoComplete='current-password'
										className='focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300'
									/>
								</div>

								<button
									type='submit'
									className='relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-blue-400 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95'>
									<span className='relative text-base font-semibold text-white dark:text-dark'>
										Sign in
									</span>
								</button>

								<p className='border-t border-gray-100 dark:border-gray-700 pt-6 text-sm text-gray-500 dark:text-gray-400'>
									{signIn
										? "Don't have an account?"
										: 'Already have an account?'}
									<a href='#' className='text-blue-400'>
										{' '}
										{signIn ? 'Sign In' : 'Sign Up'}
									</a>
								</p>
							</form>
						</div>
					</div>
					<div className='space-x-4 text-center text-gray-500'>
						<span>&copy; OpenNews</span>
						{/* <a href='#' class='text-sm hover:text-primary'>
							Contact
						</a>
						<a href='#' class='text-sm hover:text-primary'>
							Privacy & Terms
						</a> */}
					</div>
				</div>
			</div>
		</div>
	);
}
