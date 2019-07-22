import React, { Component } from 'react';
import { getSmurfs } from '../actions/index';
import { connect } from 'react-redux';

import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfList smurfs={this.props.smurfs} />
        <SmurfForm />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    getSmurfs: state.getSmurfs,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
