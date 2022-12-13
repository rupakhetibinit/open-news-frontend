import Home from './components/Home';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddNews from './components/AddNews';
export const tabs = [
	{
		name: 'National',
		slug: 'NATIONAL',
	},
	{
		name: 'Sports',
		slug: 'SPORTS',
	},
	{
		name: 'Fashion',
		slug: 'FASHION',
	},
	{
		name: 'Finance',
		slug: 'FINANCE',
	},
	{
		name: 'Politics',
		slug: 'POLITICS',
	},
	{ name: 'Other News', slug: 'OTHERS' },
];
function App() {
	return (
		<Routes>
			<Route path='/' element={<Home selected='NATIONAL' />} />;
			{tabs.map(({ name, slug }) => (
				<Route
					key={name}
					path={`/${slug}`}
					element={<Home selected={slug} />}
				/>
			))}
			<Route path='/dashboard' element={<Dashboard />} />
			<Route path='/add-news' element={<AddNews />} />
		</Routes>
	);
}

export default App;
