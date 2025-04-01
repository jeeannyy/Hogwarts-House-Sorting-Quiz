import Head from 'next/head';
import Home from '../components/Home';

export default function HomePage() {
	return (
		<>
			<Head>
				<title>Harry Potter Sorting Hat Quiz</title>
				<meta
					name='description'
					content='Find out your Hogwarts house in just 10 questions!'
				/>
				<meta property='og:title' content='Sorting Hat Quiz' />
				<meta
					property='og:description'
					content='Discover your magical destiny house🧙‍♀️'
				/>
				<meta property='og:image' content='/images/sorting-hat.jpg' />
			</Head>
			<Home />
		</>
	);
}
