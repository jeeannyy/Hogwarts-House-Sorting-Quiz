'use client';
import { Question, House } from '../types';

type Props = {
	question: Question;
	onAnswer: (house: House) => void;
};

const QuestionCard = ({ question, onAnswer }: Props) => {
	return (
		<div>
			<h2 className="text-3xl font-['New_Rocker'] mb-7 font-bold">
				{question.question}
			</h2>
			<div className='grid gap-3'>
				{question.options.map((option, index) => (
					<button
						key={index}
						onClick={() => onAnswer(option.house)}
						className="w-full px-4 py-4 bg-slate-500 rounded-xl hover:bg-slate-400 text-white transition font-['DM Serif Display']"
					>
						{option.text}
					</button>
				))}
			</div>
		</div>
	);
};

export default QuestionCard;
