import Home from './components/Home';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
export const tabs = [
	{
		name: 'National',
		slug: 'national',
	},
	{
		name: 'Sports',
		slug: 'sports',
	},
	{
		name: 'Fashion',
		slug: 'fashion',
	},
	{
		name: 'Finance',
		slug: 'finance',
	},
	{
		name: 'Politics',
		slug: 'politics',
	},
	{ name: 'Other News', slug: 'other-news' },
];
function App() {
	return (
		<Routes>
			<Route path='/' element={<Home selected='National' />} />;
			{tabs.map(({ name, slug }) => (
				<Route
					key={name}
					path={`/${slug}`}
					element={<Home selected={name} />}
				/>
			))}
		</Routes>
	);
}

export default App;
