import { quotes } from '../constants';

const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

export default getRandomQuote;