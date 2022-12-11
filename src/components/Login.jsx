export default function Login() {
	return (
		<div class='relative py-16'>
			<div class='container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40'>
				<div class='m-auto space-y-8 md:w-8/12 lg:w-6/12 xl:w-6/12'>
					<img
						src='images/tailus.svg'
						loading='lazy'
						class='ml-4 w-36'
						alt='tailus logo'
					/>
					<div class='rounded-3xl border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 backdrop-blur-2xl'>
						<div class='p-8 py-12 sm:p-16'>
							<h2 class='mb-8 text-2xl font-bold text-gray-800 dark:text-white'>
								Sign in to your account
							</h2>
							<form action='' class='space-y-8'>
								<div class='space-y-2'>
									<label for='email' class='text-gray-600 dark:text-gray-300'>
										Email
									</label>
									<input
										type='email'
										name='email'
										id='email'
										autocomplete='username'
										class='focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300'
									/>
								</div>

								<div>
									<div class='flex items-center justify-between'>
										<label for='pwd' class='text-gray-600 dark:text-gray-300'>
											Password
										</label>
										<button class='-mr-2 p-2' type='reset'>
											<span class='text-sm text-primary'>
												Forgot your password ?
											</span>
										</button>
									</div>
									<input
										type='password'
										name='pwd'
										id='pwd'
										autocomplete='current-password'
										class='focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300'
									/>
								</div>

								<button
									type='submit'
									class='relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95'>
									<span class='relative text-base font-semibold text-white dark:text-dark'>
										Connect
									</span>
								</button>

								<p class='border-t border-gray-100 dark:border-gray-700 pt-6 text-sm text-gray-500 dark:text-gray-400'>
									Don't have an account?
									<a href='#' class='text-blue-400'>
										{' '}
										Sign up
									</a>
								</p>
							</form>
						</div>
					</div>
					<div class='space-x-4 text-center text-gray-500'>
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
