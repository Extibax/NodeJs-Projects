import React, { Component } from "react";

class App extends Component {

    state = {
        task: {
            title: 'My first task',
            done: true
        }
    }

    handle_click = () => {
        const task = this.state.task;
        task.done = !task.done;
        this.setState({task: task});
    }

    render() {
        return (
            <div>
                <h3> {this.state.task.title} </h3>
                <h1> {this.state.task.done.toString()} </h1>
                <button onClick={this.handle_click}>
                    Click
                </button>
            </div>
        )
    }

}

export default App;