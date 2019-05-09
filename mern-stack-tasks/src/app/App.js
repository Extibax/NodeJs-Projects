import React, { Component } from 'react';

class App extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            description: '',
            tasks: []
        };
        this.addTask = this.addTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async addTask(e) {
        e.preventDefault();
        const result = await fetch('/api/tasks', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        console.log(await result.json());
        M.toast({html: 'Task saved'});
        this.setState({
            title: '',
            description: ''
        });
        this.fetchTasks();
    }

    componentDidMount() {
        this.fetchTasks();
    }

    async fetchTasks() {
        const result = await fetch('/api/tasks');
        const data = await result.json();
        this.setState({
            tasks: data
        });
        console.log(result);
        console.log(this.state.tasks);
        /* fetch('/api/tasks')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    tasks: data
                });
                console.log(this.state.tasks);
            }); */
    }

    async deleteTask(id) {
        console.log('Deleting: ' + id);
        fetch(`/api/tasks/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            M.toast({html: 'Task deleted'});
        });
        /* console.log('Deleting: ' + id);
        const result = await fetch(`/api/tasks/${id}`, {
            method: 'DELETE',
            headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json' 
            }
        });
        const res = await result.json();
        console.log(res);
        M.toast({html: 'Task deleted'});
        this.fetchTasks(); */
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
                        <div className="col s4">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addTask}>
                                        <div className="row">
                                            <div>
                                                <div>
                                                    <input onChange={this.handleChange} type="text" name="title" placeholder="Task Title" value={this.state.title} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div>
                                                <div>
                                                    <textarea onChange={this.handleChange} className="materialize-textarea" name="description" placeholder="Task Description" value={this.state.description}></textarea>
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
                        <div className="col s8">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.tasks.map((task) => {
                                            return (
                                                <tr key={task._id}>
                                                    <td>{task.title}</td>
                                                    <td>{task.description}</td>
                                                    <td>
                                                        <button className="btn light-blue darken-4">
                                                            <i className="material-icons">
                                                                edit
                                                            </i>
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button className="btn light-blue darken-4" onClick={() => this.deleteTask(task._id)}>
                                                            <i className="material-icons">
                                                                    delete
                                                            </i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;