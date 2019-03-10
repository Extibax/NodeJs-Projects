import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './Components/Navigation';
import Todo_Form from './Components/Todo_Form';
import { todos } from './todos.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(todo) {
    this.setState({
        todos: [...this.state.todos, todo]
    });
  }

  handleRemoveTodo(index) {
    if (window.confirm('Are you sure you want delete it?')) {
      this.setState({
        todos: this.state.todos.filter((todo, i) => {
          return i !== index;
        })
      });
    }
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
            <div className="card mt-4">
            <div className="card-header">
              <h3>{ todo.title }</h3>
              <span className="badge badge-pill badge-danger ml-2">
                { todo.priority }
              </span>
            </div>
            <div className="card-body">
              <p>{ todo.description }</p>
              <p className="text-danger">{ todo.responsible }</p>
            </div>
            <div className="card-footer">
              <button 
                className="btn btn-danger"
                onClick={ this.handleRemoveTodo.bind(this, i) }>
                Remove
              </button>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="App">
          {/* Navigation */}
          <Navigation title="TASKS" length={ this.state.todos.length } />

          {/* Logo */}
          <img src={logo} className="App-logo" alt="logo" />

          {/* Container */}
          <div className="container">

            <div className="row mb-5">

              <div className="col-md-3 mt-4">
                {/* Todo Form */}
                <Todo_Form onAddTodo={ this.handleAddTodo }/>
              </div>
              <div className="col-md-9">
                <div className="row">
                  {/* Print Todos */}
                  { todos }
                </div>
              </div>

            </div>

          </div>

      </div>
    );
  }
}

export default App;