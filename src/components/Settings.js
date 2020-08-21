import React, {Component} from "react"

class Settings extends Component {
	render(){
		return (
		<form id="settings" onSubmit={this.props.handleStart}>
		  <label>
			Name:
			<br />
			<input
			  type="text"
			  name="name"
			  value={this.props.name}
			  onChange={this.props.handleInputChange}
			/>
		  </label>
		  <br />
		  <label>
			Starting Level:
			<br />
			<input
			  type="number"
			  name="startingLevel"
			  value={this.props.startingLevel}
			  onChange={this.props.handleInputChange}
			/>
		  </label>
		  <br />
		  <label>
			Mode:
			<br />
			<select
			  name="mode"
			  value={this.props.mode}
			  onChange={this.props.handleInputChange}
			>
			  <option value="1">Normal</option>
			  <option value="2">Hard</option>
			</select>
		  </label>
		  <br />
		  <input type="submit" value="Start" />
		</form>
	  );
	}
}

export default Settings;
