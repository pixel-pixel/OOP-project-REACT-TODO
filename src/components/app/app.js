import React, {Component} from 'react'
import './app.css'

import AppHeader from "../app-header";
import Search from "../search";
import TodoList from "../todo-list";
import ListFilter from "../list-filter";
import AddTodoPanel from "../add-todo-panel";

export default class App extends Component {
  maxId = 0

  state = {
    todoData: [
      this.createTodo('lol'),
      this.createTodo('kek', true),
      this.createTodo('cheburek'),
    ],
    show: 'all',
    search: '',
  }

  createTodo(label,
             important = false,
             done = false) {
    return {id: this.maxId++, label, important, done}
  }

  toggleProperty(arr, id, propName) {
    const index = arr.findIndex(el => el.id === id)
    const item = {...arr[index], [propName]: !arr[propName]}

    return [
      ...arr.slice(0, index),
      item,
      ...arr.slice(index + 1)
    ]
  }

  search(items, term) {
    if (term === '') return items

    return items.filter(el => el.label.toLowerCase().indexOf(term.toLowerCase()) !== -1)
  }

  filter(items, filter) {
    switch (filter) {
      case 'all':
        return items
      case 'active':
        return items.filter(el => !el.done)
      case 'done':
        return items.filter(el => el.done)
      default:
        return []
    }
  }

  showAllTodos = () => {
    this.setState({show: 'all'})
  }

  showActiveTodos = () => {
    this.setState({show: 'active'})
  }

  showDoneTodos = () => {
    this.setState({show: 'done'})
  }
 
  showSearchTodos = searchText => {
    this.setState({search: searchText})
  }

  addTodo = text => {
    this.setState(({todoData}) => {
      return {
        todoData:
          [...todoData, this.createTodo(text)]
      }
    })
  }

  removeTodo = (id) => {
    this.setState(({todoData}) => {
      const newTodoData = todoData.filter(el => el.id !== id)

      return {todoData: newTodoData}
    })
  }

  toggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData:
          this.toggleProperty(todoData, id, 'done')
      }
    })
  }

  toggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData:
          this.toggleProperty(todoData, id, 'important')
      }
    })
  }

  render() {
    const {todoData, show, search} = this.state
    const todoCount = todoData
      .filter(el => !el.done).length
    const importantCount = todoData
      .filter(el => !el.done && el.important).length

    const todoDataForShow = this.search(this.filter(todoData, show), search)

    return (
      <div className="app container">
        <AppHeader todo={todoCount}
                   important={importantCount}
        />

        <div className="top-bar">
          <Search onSearch={this.showSearchTodos}/>
          <ListFilter onShowAll={this.showAllTodos}
                      onShowActive={this.showActiveTodos}
                      onShowDone={this.showDoneTodos}
          />
        </div>

        <TodoList todos={todoDataForShow}
                  onDeleted={id => this.removeTodo(id)}
                  onToggleDone={id => this.toggleDone(id)}
                  onToggleImportant={id => this.toggleImportant(id)}
        />

        <AddTodoPanel onAddTodo={text => this.addTodo(text)}/>
      </div>
    )
  }
}