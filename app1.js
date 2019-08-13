// root_app1
var shopList = [
	{"name":"Domino","phone":"111111","trade_hour":"11am to 11pm"},
	{"name":"Pizza Hut","phone":"222222","trade_hour":"10am to 00am"},
	{"name":"Eagle boys","phone":"333333","trade_hour":"12:00am to 00am"},

];

function ShopCard(props) {
	return (
		<div className='test1234'>
			<h2>Name : {props.shop.name}</h2>
			<h3>Phone : {props.shop.phone}</h3>
			<h3>Trading Hours : {props.shop.trade_hour}</h3>
		</div>
	);
}

function ShopList(arrShops) {
	console.log(arrShops.lists.length);
	//return (<ShopCard shop={{"name":"abcd","phone":"2222","trade_hour":"11am to 11pm"}} /> );

	// return (
	// 	<div>
	// 	for (var objShop of arrShops.lists ) 
	// 	{	
	// 		// console.log(objShop);
	// 		<ShopCard shop={objShop} />
	// 	}
	// 	</div>
	// );
	
	//var test = arrShops.lists.map(function(objShop){ return <ShopCard shop={objShop} />;});
	var test = arrShops.lists.map( (objShop,index) => { return <ShopCard key={index} shop={objShop} />;} );
	//var test = arrShops.lists.map( objShop => <ShopCard shop={objShop} /> );
	return (
		<div>{test}</div>
	);
}

/*
function Clock(props) {
	return (
		<div>
			<h2>Clock Component</h2>
			<h2>Current time is {props.date.toLocaleTimeString()}</h2>
		</div>
	);
}
function tick1() {
	ReactDOM.render(<Clock date={new Date()} />, document.getElementById('root_app1'));
}
setInterval(tick1,1000);
*/

class Clock2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date:new Date()};
	}
	render(){
		return (
			<div>
				<h2>Clock Component build using CLASS</h2>
				<h2>Current Time : {this.state.date.toLocaleTimeString()}</h2>
			</div>
		);
	}
	componentDidMount() {
		console.log("component monted");
		this.timerID = setInterval(()=>this.tick(),1000 );
	}
	componentWillUnmount() {
		console.log("component un-monted");
		clearInterval(this.timerID);
	}
	tick() { this.setState({date:new Date()});}
}
//ReactDOM.render(<Clock2 />,document.getElementById("root_app11"));

class Clock3 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date : new Date()};
	}

	render() {
		return (
			<div>
				<h2>Clock3 Component</h2>
				<h2>Current time is : {this.state.date.toLocaleTimeString()}</h2>				
			</div>
		);
	}

	componentDidMount(){
		this.timerID = setInterval(()=>this.tick(),1000);
	}

	componentWillUnmount(){
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({date : new Date()});
	}
}
//ReactDOM.render(<Clock3 />,document.getElementById("root_app11"));

class ActionClick extends React.Component {
	constructor(props) {
		super(props);
		//this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){
		e.preventDefault();
		console.log("Link clicked");
	}
	render() {
		return (
			<h3><a href="http://www.google.com.au" onClick={this.handleClick}>Click Me</a></h3>
		);		
	}
}

class Toggle extends React.Component {
	constructor (props) {
		super(props);
		this.state = {isToggleOn : false};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {		
		this.setState(state => ({isToggleOn : !state.isToggleOn}));
	}

	render() {
		return <button onClick={this.handleClick}>{this.state.isToggleOn?"ON":"OFF"}</button>;
	}
}

class Toggle2 extends React.Component {
	constructor(props) { 
		super(props);
		this.state = {isToggleOn : true};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState( state => ({isToggleOn : !state.isToggleOn}) );
	}

	// handleClick = () => {this.setState( state => ({isToggleOn : !state.isToggleOn}) )};

	render() {
		return (
			<button onClick={this.handleClick} >{this.state.isToggleOn?"START":"STOP"}</button>
		);
	}
}

/*
function UserGreeting(props) {
	return (<h3>Welcome Back !!</h3>);
}
function GuestGreeting(props) {
	return (<h3>Guese Please sign in !!</h3>);
}
function Greeting(props) {
	const isLoggedOn = props.isLoggedOn;

	if ( isLoggedOn )
		return <UserGreeting/>;
	else
		return <GuestGreeting/>;

} 
ReactDOM.render(<Greeting isLoggedOn={false}/>,document.getElementById("root_app11"));
*/





//ReactDOM.render(<Toggle2 />,document.getElementById("root_app11"));



//ReactDOM.render(<ShopCard />,document.getElementById('root_app1'));
//ReactDOM.render(<ShopList lists={{shopList}} />,document.getElementById('root_app1'));

//ReactDOM.render(<ShopList lists={shopList} />,document.getElementById('root_app1'));