import React, {Component} from "react"
import './App.css';
import Box from './components/Box.js';
import Score from './components/Score.js';
import GameState from './components/GameState.js';
import Highscore from './components/Highscore.js';
import Settings from './components/Settings.js';
import getRandomQuote from './utils/getRandomQuote.js';
import { colours } from './constants.js';
import logo from './logo.png'


class App extends Component {
	constructor(props){
	super(props);
	this.state = {
		started: false,
		score: 0, 
		sequence: [], 
		guesses: [],
		gameState: '',
		highScores: [],
		currentColour: 'white',
		name: 'Player 1',
		startingLevel: 1,
		mode: 1
	};
		
	this.handleInputChange = this.handleInputChange.bind(this);
	this.handleStart = this.handleStart.bind(this);
	}
	
	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
		[name]: value
		});
	}

	handleStart(event) {
		this.setState({
			gameState: '', sequence: []
		}, this.startSequence
		);
		event.preventDefault();
	}

	startSequence() {
		let i = 0;
		this.setState({
			started: true,
			sequence: [...this.state.sequence, ...this.nextSequenceColour()], 
			guesses: [] 
		});
					
		const interval = setInterval(() => {
			this.renderSequence(this.state.sequence[i++]);
			if(i === this.state.sequence.length) {
				clearInterval(interval);
			}
		},1000/this.state.mode);
	}
	
	renderSequence(idSequence) {
		const mode = this.state.mode;
		setTimeout(() => this.setState({ currentColour: colours[idSequence] }), 500/mode);
		setTimeout(() => this.setState({ currentColour: 'white' }), 1000/mode);
	}
	
	nextSequenceColour() {
		if (!this.state.sequence.length) {
			return Array.from({length: this.state.startingLevel}, () => Math.floor(Math.random() * 4));
		}
		return [Math.floor(Math.random() * 4)];			
	}
	
	sortHighScores(){
		const highScores = this.state.highScores;
		highScores.push({
			name: this.state.name,
			score: this.state.score
		});
					
		return highScores.sort((a, b) => b.score - a.score);
	}
	
	onGuess(guess) {
		if (!this.state.started) return;
		const guesses = [...this.state.guesses, guess];
		const sequence = this.state.sequence;
		
		if (guess !== sequence[guesses.length-1]) {
			this.setState({
				started: false,
				highScores: this.sortHighScores(),
				score: 0,
				gameState: 'Game Over!',
				sequence: []
			});
			return;
		}
		
		this.setState({ guesses });	
		
		if (guesses.length === sequence.length) {
			this.setState({ 
				guesses,
				score: this.state.score + 1,
				gameState: getRandomQuote(),
				});
			this.startSequence();
		}
	}
	
	renderBoxes() {
		return colours.map((colour, i) => {
			return <div key={i} className={`box ${colour}`} onClick={() => this.onGuess(i)}></div>;
		});
	}

	render() {
		return (
			<div className="wrapper">
				<div className="logo">
					<img src={logo} alt="" />
				</div>
				<div className="grid">
					<Box currentColour = {this.state.currentColour}/>
						{this.renderBoxes()}
					<Settings 
						handleInputChange = {this.handleInputChange}
						handleStart = {this.handleStart}
						mode = {this.state.mode}
						name = {this.state.name}
						startingLevel = {this.state.startingLevel}
					/>
					<GameState gameState = {this.state.gameState} />
					<Score score = {this.state.score} />
				    <Highscore highScores = {this.state.highScores} />
				</div>
			</div>
		)
	}
}

export default App;
