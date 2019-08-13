function UserGreeting(props) {
	return (<h4>Welcome Back User</h4>);
}

function GuestGreeting(props) {
	return (<h4>Welcome, Please Sign-in</h4>);
}

function Greeting(props) {
	const isLoggedIn  = props.isLoggedIn ;
	if (isLoggedIn)
		return <UserGreeting/>;
	else
		return <GuestGreeting/>;
}

function LoginButton(props) {
	return (<button onClick={props.onClick}>Login In</button>);
}

function LogoutButton(props) {
	return (<button onClick={props.onClick}>Login Out</button>);	
}

class LoginControl extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {isLoggedIn: true};
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);		
	}

	handleLoginClick() {
		this.setState({isLoggedIn:true});
	}

	handleLogoutClick() {
		this.setState({isLoggedIn:false});
	}

	render() {
		const isLoggedIn = this.state.isLoggedIn;
		let button;

		if (isLoggedIn) {
			button = <LoginButton onClick={this.handleLogoutClick} />;
		} else {
			button = <LogoutButton onClick={this.handleLoginClick} />;
		}

		return (
			<div>
				<Greeting isLoggedIn={this.state.isLoggedIn} />
				{button}
			</div>
		);
	}

}
//ReactDOM.render(<LoginControl />,document.getElementById('root_app2'));

// function MailBox(props) {
// 	const unreadmessages = props.unreadmessages;

// 	return (
// 		<div>
// 			<h1>Hello</h1>
// 			<h4>You have </h4>
// 		{ unreadmessages.length > 0 &&
// 			<h5>You have {unreadmessages.length} unread messges.</h5>
// 		}
// 		</div>
// 	);
// 	// return null;
// }
// const messages = [];
// ReactDOM.render(<MailBox unreadmessages={messages} />, document.getElementById('root_app2'));

function WarningManager(props) {
	if (!props.warn)
		return null;	

	return (
		<div><p className="warningLabel">WARNING</p></div>
	);

}

class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = {showWarning:true};
		this.handleToggleClick = this.handleToggleClick.bind(this);
	}

	handleToggleClick() {
		this.setState( state => ({
			showWarning:!state.showWarning
		}));

		// const numbers = [2,3,4];
		// console.log(numbers);
		// // const doubled = numbers.map(aNum => aNum * 2);
		// //const doubled = numbers.map(function(a1){ return a1*2;});
		// console.log(doubled);
		// // const liList = numbers.map(aNum => <li id={aNum}>{aNum * 2}</li> );
		// // console.log(liList);
	}
	render() {
		return (
			<div>
				<WarningManager warn={this.state.showWarning} />
				<button onClick={this.handleToggleClick} >{this.state.showWarning?"Hide":"Show"}</button>
			</div>
		);
	}

}
// ReactDOM.render(<Page />, document.getElementById('root_app2'));

function NumberList(props) {
	const numbers = props.numbers;	
	let liList;
	if (!numbers.length)
		liList = <li>Empty list</li>;
	else 
		liList = numbers.map((aNumber,index) => <li key={index.toString()}>{aNumber}</li>);
	return <ul>{liList}</ul>;
}
const numbers = ['php','java','c'];
//ReactDOM.render(<NumberList numbers={numbers} />, document.getElementById('root_app2'));
