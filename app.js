const user = {fname:"PHP", lname:"MySQL"};
function formatName(user) { return user.fname + ' ' +user.lname;}
const element = <h1>Hello {formatName(user)} !!</h1>;
ReactDOM.render(element,document.getElementById('root'));




function WelcomeUser(props) {
  return (<h1>Wecome {props.name}</h1>);
}

function App()
{
    return(
    <div>
      <WelcomeUser name="Window" />
      <WelcomeUser name="Apache" />
    </div>
    );
} 

function tick(){
  const element = (
    <div>
      <h1>The time is {new Date().toLocaleTimeString()}</h1>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root1'));
}

ReactDOM.render(<App />,document.getElementById('root1'));

setInterval(tick,5000);




// class ShoppingList extends React.Component {
//   render() {
//     return (
//       <div className="shopping-list">
//         <h1>Shopping List for {this.props.name}</h1>
//         <ul>
//           <li>Instagram</li>
//           <li>WhatsApp</li>
//           <li>Oculus</li>
//         </ul>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<ShoppingList />,document.getElementById('root'));


/*
class Square extends React.Component {
  render() {
    return (<button className="square">{ //TODO }</button>);
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }
  render(){
    const status  = "Next Player X";

    return (
      <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>          
      </div>
    );
  }
}
*/