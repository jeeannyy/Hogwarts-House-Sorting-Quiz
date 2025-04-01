'use client';
import { useRouter } from 'next/navigation';

const Home = () => {
	const router = useRouter();

	return (
		<div
			className='min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4'
			style={{ backgroundImage: "url('/images/sorting-hat.jpg')" }}
		>
			<div className=' p-10 rounded-2xl text-center max-w-max w-full shadow-2xl '>
				<h1 className="text-8xl text-stone-400  mb-16 tracking-wide drop-shadow-[4px_5px_0_black] font-['New_Rocker'] ">
					🪄 Sorting Hat Quiz 🪄
				</h1>
				<p className='italic text-gray-200 text-lg md:text-xl mb-8 leading-relaxed drop-shadow-[2px_4px_0_black]'>
					You don't choose the house... it chooses you.
				</p>
				<button
					onClick={() => router.push('/quiz')}
					className='px-8 py-3 bg-stone-600 text-white font-semibold rounded-lg hover:bg-stone-500 transition shadow-md'
				>
					Start you muggle
				</button>
			</div>
		</div>
	);
};

export default Home;
