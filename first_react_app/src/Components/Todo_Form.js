import React, { Component } from 'react';

class Todo_Form extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        const {value, name} = e.target;
        this.setState({
            [name]: value
        });
        console.log(this.state);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAddTodo(this.state);
    }

    render() {
        return(
            <div className="card">
                <div className="card-header">
                    {/* <a className="text-dark" href="#">Add Task</a> */}
                    <h3>Add Task</h3>
                </div>
                <form className="card-body" onSubmit={ this.handleSubmit }>
                    <div className="form-group">
                        <input
                            type="text"
                            name="title"
                            onChange={ this.handleInput }
                            className="form-control"
                            placeholder="Title"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="responsible"
                            onChange={ this.handleInput }
                            className="form-control"
                            placeholder="Responsible"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="description"
                            onChange={ this.handleInput }
                            className="form-control"
                            placeholder="Description"
                        />
                    </div>
                    <div className="form-group">
                        <select 
                        name="priority" 
                        onChange={ this.handleInput } 
                        className="form-control">
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>
                    <div className="">
                        <input
                            type="submit"
                            value="Save"
                            className="btn btn-danger form-control"
                        />
                    </div>
                </form>
        </div>
        );
    }
}

export default Todo_Form;