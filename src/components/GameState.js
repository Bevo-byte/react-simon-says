import React, {Component} from "react"

class GameState extends Component {
	render(){
		return (
			<div id="gameState">
				{this.props.gameState}
			</div>
		)
	}
}

export default GameState

