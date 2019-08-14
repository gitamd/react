class NameForm extends React.Component {
	constructor() {
		super();
		this.state = {txtInput:'text input', txtArea:'text area inputs', selFruit:"banana"};
		this.state = {numberOfGuests:2,isGoing:false, isFlying:false};
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
	
	handleChangeSelect = (event) => {
		 this.setState({selFruit:event.target.value});
	}

	handleInputChange= (event) => {
		const target = event.target;
		const value  = target.type === "checkbox"?  target.checked: target.value; 
		const name = target.name;

		this.setState({[name]:value});

		console.log(name,value,target);

		//alert (target.type);
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
				<select onChange={this.handleChangeSelect} value={this.state.selFruit} >				
					<option value="">Select Fruit</option>
					<option value="apple">Apple</option>
					<option value="orange">Orange</option>
					<option value="mango">Mango</option>
					<option value="banana">Banana</option>
				</select>
				<select multiple={true} readOnly value={['apple','mango']} >				
					<option value="">Select Fruit</option>
					<option value="apple">Apple</option>
					<option value="orange">Orange</option>
					<option value="mango">Mango</option>
					<option value="banana">Banana</option>
				</select>
				<br/>
				<input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
				<input name="isFlying" type="checkbox" checked={this.state.isFlying} onChange={this.handleInputChange} />
				<input type="number" name="numberOfGuests" onChange={this.handleInputChange} value={this.state.numberOfGuests}	/>			
				<br/>

				<button type="submit" >SUBMIT</button>
				</form>
			</div>
		);
	}

}

ReactDOM.render(<NameForm />,document.getElementById('root_app4'));

