import { useState } from 'react';
function ToggleTheme() {
	const [darkMode, setDarkMode] = useState(false);
	const toggleTheme = () => {
		setDarkMode(!darkMode);
		const root = window.document.documentElement; //add 'dark class to html root element'
		root.classList.toggle('dark');
	};

	return (
		<button
			onClick={toggleTheme}
			type='button'
			title='Dark Mode'
			className='absolute top-0 left-0 z-20 w-full py-3 px-6 rounded-xl text-center transition bg-green-600 hover:bg-green-700 active:bg-green-800 focus:bg-green-500 sm:w-max'>
			<span className='block text-white font-semibold'>
				{darkMode ? 'Light' : 'Dark'}
			</span>
		</button>
	);
}
export default ToggleTheme;
