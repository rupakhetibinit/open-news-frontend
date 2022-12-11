import React from 'react';
import { Tab } from '@headlessui/react';
const Home = () => {
	return (
		<div className='w-full h-screen'>
			<Tab.Group>
				<Tab.List>
					<Tab>National</Tab>
					<Tab>International</Tab>
					<Tab>Sports</Tab>
					<Tab>Fashion</Tab>
				</Tab.List>
				<Tab.Panels>
					<Tab.Panel>National News</Tab.Panel>
					<Tab.Panel>International News</Tab.Panel>
					<Tab.Panel>Sports News</Tab.Panel>
					<Tab.Panel>Fashion News</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</div>
	);
};

export default Home;
