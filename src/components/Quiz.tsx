'use client';

import { useState } from 'react';
import { questions } from '../data/questions';
import { House } from '../types';
import { useRouter } from 'next/navigation';
import QuestionCard from '../components/QuestionCard';

const Quiz = () => {
	const router = useRouter();

	const [current, setCurrent] = useState(0);
	const [scores, setScores] = useState<Record<House, number>>({
		Gryffindor: 0,
		Slytherin: 0,
		Ravenclaw: 0,
		Hufflepuff: 0,
	});

	const handleAnswer = (house: House) => {
		setScores((prev) => ({
			...prev,
			[house]: prev[house] + 1,
		}));

		if (current < questions.length - 1) {
			setCurrent((prev) => prev + 1);
		} else {
			localStorage.setItem(
				'quizResult',
				JSON.stringify({ ...scores, [house]: scores[house] + 1 }),
			);
			router.push('/result');
		}
	};

	return (
		<div
			className='min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4'
			style={{ backgroundImage: "url('/images/quiz.jpg')" }}
		>
			<div className='bg-orange-50 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-xl w-full'>
				<div className='w-full h-4 bg-stone-300 rounded-full mb-6 overflow-hidden'>
					<div
						className='h-full bg-stone-500 transition-all'
						style={{
							width: `${((current + 1) / questions.length) * 100}%`,
						}}
					/>
				</div>

				<QuestionCard question={questions[current]} onAnswer={handleAnswer} />
			</div>
		</div>
	);
};

export default Quiz;
