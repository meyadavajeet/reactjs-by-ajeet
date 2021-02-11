import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json()
        .then(json => {
          this.setState({
            isLoaded: true,
            items: json
          })
        }))
  }

  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading .....</div>;
    }

    return (
      <div className="App">
        <ul>
          {items.map(item => {
            return (
              <li key={item.id}>
                Name : {item.name} | Email {item.email}
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;
