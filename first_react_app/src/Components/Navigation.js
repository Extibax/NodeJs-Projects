import React, { Component } from 'react';

import { todos } from '../todos.json';

class Navigation extends Component 
{
    constructor() {
        super();
        this.state = {
          todos
        };
      }

    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    { this.props.title }
                    <span className="badge badge-pill badge-dark ml-2">
                        { this.props.length }
                    </span>
                </a>
            </nav>
        );
    }
}

export default Navigation;