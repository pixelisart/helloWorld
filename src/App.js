import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headerText: "Welcome to React!",
      contentText: "In this lecture, we will go over the Component"
    };
  }
  render() {
    return (
      <div className="App">
        {
          /*
          <h1>{this.state.headerText}</h1>
          <p>{this.state.contentText}</p>
          */
        }

        <Header />
        <Content />

      </div>
    );
  }
}

// Create a stateless example where we create two components (Header and Content) and try to put it in App Component.
// Stateless component only renders html structured contents.
// Stateful component passes data into a component.
  // Stateful component requires the constructor method.
class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
    );
  }
}

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          "id": 1,
          "name": "Foo",
          "age": "30"
        },
        {
          "id": 2,
          "name": "Bar",
          "age": "20"
        },
        {
          "id": 3,
          "name": "Baz",
          "age": "35"
        }
      ]
    };
  }
  render() {
    return (
      <p className="App-intro">
        <h1>What is Component!</h1>
        <p>In this lecture, we will go over the Component</p>
        <table>
          <thead>
            <tr>
              <th>
                <td>Id</td>
                <td>Name</td>
                <td>Age</td>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((person, i) => <TableRow key={i} data={person}/> )}
          </tbody>
        </table>
      </p>
    );
  }
}

class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    );
  }
}


export default App;