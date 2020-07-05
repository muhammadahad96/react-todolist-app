import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
  state = {
    title: ''
  }

  onSubmit = (ev) => {
    ev.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };
  
  onChange = (ev) => this.setState({ [ev.target.name]: ev.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input 
          type="text" 
          name="title" 
          style={{ flex: "10", pading: "5px" }}
          placeholder="Add Todo ..." 
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    )
  }
}

// Prop Types
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo
