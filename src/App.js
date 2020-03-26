import React from 'react';
import './css/main.css';

import { v4 as uuidv4 } from 'uuid';

import Header from './components/Header';
import Main from './components/Main';

class App extends React.Component {
  state = {
    todos: []
  }

  localStorage = window.localStorage;

  componentDidMount() {
    const todoItems = JSON.parse(localStorage.getItem('todoItems'));
    if(todoItems) {
      this.setState({
        todos: todoItems
      });
    }
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })
   });
  }

  delTodo = (id) => {
    this.setState({ todos: this.state.todos.filter(todo => {
        return todo.id !== id;
      })
    });
  }

  addTodo = (title) => {
    if(title) {
      const newTodo = {
        id: uuidv4(),
        title,
        completed: false
      }

      this.setState({
        todos: [...this.state.todos, newTodo]
      });
    }
  }

  clearAll = () => {
    if(window.confirm("Are you sure? All items will be deleted!!")) {
      this.setState({
        todos: []
      });

      localStorage.clear();
    }
  }

  saveAll = () => {
    localStorage.setItem('todoItems',
     JSON.stringify(this.state.todos));
  }

  render() {
    return (
      <div>
        <Header />
        <Main todos={this.state.todos}
         markComplete={this.markComplete}
         delTodo={this.delTodo}
         addTodo={this.addTodo}
         clearAll={this.clearAll}
         saveAll={this.saveAll} />
      </div>
    );
  }
}

export default App;
