import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    monsters : []
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }
  render(){
    return (
      <div className="App">
      {this.state.monsters.map(user => <h1 key={user.id}>{user.name}</h1>)}
      </div>
    );
  }
}

export default App;
