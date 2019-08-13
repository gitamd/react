class NameForm extends React.Component {
	constructor() {
		super();
		this.state = {txtInput:'text input', txtArea:'text area inputs'};
	}


	handleSubmit = (event) => {

		event.preventDefault();
	}

	handleChange = (event) => {
		this.setState({txtInput:event.target.value});
	}

	handleChangeTextArea = (event) => {
		this.setState({txtArea:event.target.value});
	}
	



	render() {
		return(
			<div>
				<h3>Name Form </h3>
				<form onSubmit={this.handleSubmit}>
				<label>Name : <input type="text" value={this.state.txtInput} onChange={this.handleChange} /></label> 
				<p>{this.state.txtInput}</p>
				<label>Description </label>
				<textarea value={this.state.txtArea} onChange={this.handleChangeTextArea}/>
				<p>{this.state.txtArea}</p>

				<button type="submit" >SUBMIT</button>
				</form>
			</div>
		);
	}

}

ReactDOM.render(<NameForm />,document.getElementById('root_app4'));

