import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Message from "./components/Message";

const initialState = {
  name: "Manny",
  message: "Typescript cool!"
}

type State = Readonly<typeof initialState>;

class App extends Component<any, State> {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <Message name={this.state.name} message={this.state.message}/>
        </header>
      </div>
    );
  }
}

export default App;
