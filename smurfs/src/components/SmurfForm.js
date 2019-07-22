import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class SmurfForm extends Component {
  constructor() {
    super();
    this.state = {
      name: ' ',
      age: ' ',
      height: ' '
    };
  }

  changeHandler = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();
    const { name, age, height } = this.state;
    this.props.addSmurf({ name, age, height });
    this.setState({ name: '', age: '', height: '' });
  };

  render() {
    return (
      <form className="add-smurf-form" onSubmit={this.submitHandler}>
        <input
          className="input"
          value={this.state.name}
          name="name"
          type="text"
          placeholder="Name"
          onChange={this.changeHandler}
        />
        <input
          className="input"
          value={this.state.age}
          name="age"
          type="text"
          placeholder="Age"
          onChange={this.changeHandler}
        />
        <input
          className="input"
          value={this.state.height}
          name="height"
          type="text"
          placeholder="height in cm"
          onChange={this.changeHandler}
        />
        <button type="submit">Add New Smurf</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { addSmurf }
)(SmurfForm);
