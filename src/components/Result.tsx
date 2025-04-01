'use client';
import { useEffect, useState } from 'react';
import { House } from '../types';
import { useRouter } from 'next/navigation';
import { houseStyles } from '../constants/houses';

const Result = () => {
	const [result, setResult] = useState<House | null>(null);
	const router = useRouter();

	useEffect(() => {
		const data = localStorage.getItem('quizResult');
		if (!data) {
			router.push('/');
			return;
		}

		const scores = JSON.parse(data) as Record<House, number>;
		const topHouse = Object.entries(scores).reduce((acc, curr) =>
			curr[1] > acc[1] ? curr : acc,
		)[0] as House;

		setResult(topHouse);
	}, [router]);

	if (!result) return null;

	const { color, image, description, bg, emoji } = houseStyles[result];

	return (
		<div
			className='min-h-screen flex flex-col justify-center items-center text-center p-6 bg-cover bg-center bg-no-repeat'
			style={{ backgroundImage: `url(${bg})` }}
		>
			<div className='max-w-xl bg-orange-50 bg-opacity-90 p-8 rounded-2xl shadow-xl'>
				<h1 className="text-3xl text-zinc-700 font-bold mb-4 font-['New_Rocker']">
					🏰 You belong to...
				</h1>
				<img src={image} alt={result} className='w-40 h-40 mb-4 mx-auto' />

				<div
					className="text-5xl font-extrabold mb-5 font-['New_Rocker']"
					style={{ color }}
				>
					{result}
				</div>
				<p className='mb-6 text-gray-800 text-lg'>
					{description} {emoji}
				</p>
				<button
					onClick={() => router.push('/')}
					className='px-6 py-3 bg-stone-600 text-white rounded-xl hover:bg-stone-500 transition shadow-md '
				>
					Start Again
				</button>
			</div>
		</div>
	);
};

export default Result;
