import React, {Component} from 'react';
import './App.css';
import {CardList} from './card-list/card-list.component'
import {Searchbox} from './Searchbox/Searchbox.component'

class App extends Component {
  state = {
    monsters : [],
    searchTerm : ""
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }
  handleSearch = (e) => {
    this.setState({searchTerm:e.target.value})
  }

  render(){
    let monsters;
    monsters = this.state.monsters
    if (this.state.searchTerm){
      monsters =  this.state.monsters.filter(monster => monster.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }
    return (
      <div className="App">
      <h1>Monster Pals</h1>
      <Searchbox handleSearch={this.handleSearch}/>
      <CardList monsters={monsters}/>
      </div>
    );
  }
}

export default App;
