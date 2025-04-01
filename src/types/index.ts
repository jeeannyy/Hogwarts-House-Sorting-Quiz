export type House = 'Gryffindor' | 'Slytherin' | 'Ravenclaw' | 'Hufflepuff';

export type Option = {
	text: string;
	house: House;
};

export type Question = {
	id: number;
	question: string;
	options: Option[];
};
