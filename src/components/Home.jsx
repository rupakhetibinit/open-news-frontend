import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
const Home = () => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	return (
		<div className='w-full h-screen'>
			<Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
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
