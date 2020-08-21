import React, {Component} from "react"

class Highscore extends Component {
	
	renderHighScores(highScores) {
		return highScores.slice(0,10).map((row, i) => {
			return <tr key={i}>
				     <th scope="row" >{i+1}</th>
					 <td>{row.name}</td>
					 <td>{row.score}</td>
				   </tr>;
		})
	}
	
	render() {
		return (
			<div id="highscores"> 
				<h5>High Scores</h5>
				<table className="table table-sm">
					<thead>
						<tr>
						  <th scope="col">#</th>
						  <th scope="col">Name</th>
						  <th scope="col">Score</th>
						</tr>
					</thead>
					<tbody>
					{this.renderHighScores(this.props.highScores)}
					</tbody>
				</table>
			</div>
		)
	}
}

export default Highscore