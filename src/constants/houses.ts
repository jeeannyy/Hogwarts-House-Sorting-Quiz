import { House } from '../types';

export const houseStyles: Record<
	House,
	{
		color: string;
		image: string;
		bg: string;
		description: string;
		emoji: string;
	}
> = {
	Gryffindor: {
		color: '#ae0001',
		image: '/images/gryffindor-sigil.png',
		bg: '/images/gryffindor-bg.jpg',
		description: 'You’re bold, loud, and built for main character energy',
		emoji: '🦁',
	},
	Slytherin: {
		color: '#2a623d',
		image: '/images/slytherin-sigil.png',
		bg: '/images/slytherin-bg.png',
		description: 'Savage, calculated, clever, kinda iconic',
		emoji: '🐍',
	},
	Ravenclaw: {
		color: '#222f5b',
		image: '/images/ravenclaw-sigil.png',
		bg: '/images/ravenclaw-bg.png',
		description: 'Big brain energy. You read, you know, you slay',
		emoji: '🦅',
	},
	Hufflepuff: {
		color: '#ecb939',
		image: '/images/hufflepuff-sigil.png',
		bg: '/images/hufflepuff-bg.png',
		description: 'Soft, pure, pookie wookie vibes only',
		emoji: '🦡',
	},
};
