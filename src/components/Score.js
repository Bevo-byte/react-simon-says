import React, {Component} from "react"

class Score extends Component {
	render() {
		return (
			<div id="score">
				Current Score: {this.props.score}
			</div>
		)
	}
}

export default Score