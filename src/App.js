import React, { Component } from 'react'
import './index.css';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters:[],
      searchField: ''
    }
  }

componentDidMount()  {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(() => {
      return {
        monsters:users
      }
    }))
}

  render() {
            const filterdMonsters = this.state.monsters.filter((monster) => {
              return monster.name.toLocaleLowerCase().includes(this.state.searchField);
            });
    return (
      <div>
          <input 
            className='search-box' 
            type='search' 
            placeholder='enter monster name' 
            onChange={(event) => {

             const searchField = event.target.value.toLocaleLowerCase();

             this.setState(() => {
              return { searchField };
             })
            }}
          />
          {filterdMonsters.map((monster) => {
            return <h1 key={monster.id}> {monster.name}</h1>
          })}
      </div>
    )
  }
}
