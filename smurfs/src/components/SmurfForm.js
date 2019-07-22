import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/index';

class SmurfForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      height: ''
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
      <form onSubmit={this.submitHandler}>
        <input
          value={this.state.name}
          name="name"
          palceholder="Name"
          onChange={this.changeHandler}
        />
        <input
          value={this.state.age}
          name="age"
          palceholder="Age"
          onChange={this.changeHandler}
        />
        <input
          value={this.state.height}
          name="height"
          palceholder="Height"
          onChange={this.changeHandler}
        />
        <button type="submit">Submit</button>
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
