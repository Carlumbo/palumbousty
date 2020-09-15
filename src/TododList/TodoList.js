import React, { Component } from 'react'
import TodoForm from './TodoForm'

const api_url =  'http://localhost:3001/api/v1/todos'


class TodoList extends Component {
   constructor(props) {
       super(props)
       this.state = {
           items: []
       }
       //get the items from the api

    }

    componentDidMount() {
        this.getTasks();

    }

    getTasks() {
        fetch(api_url)
        .then(response => response.json())
        .then(ressponse_items => { this.setState({
            items: ressponse_items
        }) 
        });
    }
    render() {
        return (
            <div>
                <TodoForm />
                <ul id="todo_list">
                    {this.state.items.map((item) => (
                        <li key={item.id}>{item.task}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

 
export default TodoList;
