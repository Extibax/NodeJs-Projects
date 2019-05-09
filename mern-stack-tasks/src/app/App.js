import React, { Component } from 'react';

class App extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            description: ''
        };
        this.addTask = this.addTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    addTask(e) {
        e.preventDefault();
        console.log(this.state);
    }
    
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                {/* Navigation */}
                <nav className="light-blue darken-4">
                    <div className="container">
                        <a className="brand-logo" href="/">MERN Stack</a>
                    </div>
                </nav>

                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addTask}>
                                        <div className="row">
                                            <div>
                                                <div>
                                                    <input onChange={this.handleChange} type="text" name="title" placeholder="Task Title" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div>
                                                <div>
                                                    <textarea onChange={this.handleChange} className="materialize-textarea" name="description" placeholder="Task Description"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div>
                                                <div>
                                                    <button className="btn light-blue darken-4" type="submit">Send</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col s7">
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;