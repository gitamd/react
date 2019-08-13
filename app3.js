function ToDo(props) {
	return (
		<tr>
			<td><b>{props.id}</b></td>
			<td><input /></td>
			<td>{props.createdAt.toTimeString()}</td>
		</tr>
	);
}


class ToDoList extends React.Component {
	constructor(props){
		super(props);
		const toDoCounter = 1;
		const createdAt = new Date();
		this.state = {
			toDoCounter : toDoCounter,
			list : [{id:toDoCounter, createdAt:createdAt}]
		};
	}

	addToStart=()=> {
		const date = new Date();
		const nextId = this.state.toDoCounter + 1;
		const newList = [{id:nextId,createdAt:date},...this.state.list];
		this.setState ({toDoCounter:nextId, list:newList});
	}

	addToEnd = () => {
		const date = new Date();
		const nextId = this.state.toDoCounter + 1;
		const newList = [...this.state.list,{id:nextId,createdAt:date}];
		this.setState({toDoCounter:nextId,list:newList});
	}

	sortEarliest = () => {
		// const newList = this.state.list.sort(function(a,b){
		// 	return (a.createdAt < b.createdAt?-1:(a.createdAt > b.createdAt?1:0):0)  ;
		// });

		const newList = this.state.list.sort(
			(a,b) =>  (a.createdAt < b.createdAt?-1:(a.createdAt > b.createdAt?1:0):0)		
		);
		this.setState({list:newList});
	}

	sortLatest = () => {
		const newList = this.state.list.sort(
			(a,b) => (a.createdAt < b.createdAt ? 1 :(a.createdAt>b.createdAt ? -1 : 0))
		);
		this.setState({list:newList});
	}

	render(){

		return (
			<div>
				<button onClick={this.addToStart}>Add new to Start</button>
				<button onClick={this.addToEnd}>Add new to End</button>
				<button onClick={this.sortEarliest}>Sort by Earliest</button>
				<button onClick={this.sortLatest}>Sort by Latest</button>
				<table>
					<thead>
						<tr>
							<td>ID</td>
							<td/>
							<td>Created At</td>
						</tr>
					</thead>
					<tbody>
					{ this.state.list.map(
							(todo)=> <ToDo key={todo.id} {...todo} />
						)
					}				
					</tbody>
				</table>
			</div>
		);
	}
}

// const todo = [{id:1,createdAt:new Date()}];
//const todo = {id:1,createdAt:new Date()};

// ReactDOM.render(<ToDo prop={todo}/>,document.getElementById('root_app3'));
 ReactDOM.render(<ToDoList />,document.getElementById('root_app3'));