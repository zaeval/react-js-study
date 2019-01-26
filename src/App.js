import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jsx241 from './Jsx241';
import Jsx2411 from './Jsx2411';
import Jsx243 from './Jsx243';
import Jsx245 from './Jsx245';
import Jsx246 from './Jsx246';
import Jsx248 from './Jsx248';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>2.4.1</h1>
        <Jsx241/>
        <h1>2.4.1.1</h1>
        <Jsx2411/>
        <h1>2.4.3</h1>
        <Jsx243/>
        <h1>2.4.5</h1>
        <Jsx245/>
        <h1>2.4.6</h1>
        <Jsx246/>
        <h1>2.4.8</h1>
        <Jsx248/>
      </div>
    );
  }
}

export default App;