import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import SWcharacter_items from './components/items/SWcharacter_items';
import SWcharacter from './components/items/SWcharacter';
import Search from './components/items/Search';
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

    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ characters: res.data, loading: false });
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar title='StarWars API' icon='fas fa-jedi' />

          <div className='container'>
            <Search />
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
