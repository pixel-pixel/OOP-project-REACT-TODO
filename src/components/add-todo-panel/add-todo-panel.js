import React, {Component} from 'react'
import './add-todo-panel.css'

export default class AddTodoPanel extends Component{

  state = {
    todoText: ''
  }

  onLabelChange = e => {
    this.setState({todoText: e.target.value})
  }

  onSubmit = e => {
    e.preventDefault()

    if(this.state.todoText !== '') {
      this.props.onAddTodo(this.state.todoText)
      this.setState({todoText: ''})
    }
  }

  render() {
    return (
      <form className="add-todo-panel d-flex" onSubmit={this.onSubmit}>
        <input type="text"
               className="form-control"
               placeholder="new todo?"
               onChange={this.onLabelChange}
               value={this.state.todoText}
        />

        <button type="submit" className="btn btn-outline-primary">
          add new todo
        </button>
      </form>
    )
  }
}