import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import SWcharacter_items from './components/items/SWcharacter_items';
import SWcharacter from './components/items/SWcharacter';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
  state = {
    characters: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get('https://api.github.com/search/users');

    this.setState({ characters: res.data, loading: false });
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar title='StarWars API' icon='fas fa-jedi' />

          <div className='container'>
            <h2 style={tittle_color}>Characters</h2>
            <SWcharacter
              loading={this.state.loading}
              characters={this.state.characters}
            />
          </div>
        </div>
      </Router>
    );
  }
}

const tittle_color = {
  color: 'red',
};

export default App;
