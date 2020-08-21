import React, {Component} from "react"

class Box extends Component {
	render() {
		return (
			<div className={`box main ${this.props.currentColour}`}></div>
		)
	}
}

export default Box