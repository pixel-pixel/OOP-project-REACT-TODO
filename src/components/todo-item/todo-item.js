import React, {Component} from 'react'
import './todo-item.css'

export default class TodoItem extends Component {
  render() {
    const {done = false,
      important = false,
      onDeleted,
      onToggleDone,
      onToggleImportant} = this.props

    let className = 'todo-item'

    if (done) className += ' done'
    if (important) className += ' important'

    return (
      <div className={className}>
        <span className="todo-item-text" onClick={onToggleDone}>
          {this.props.label}
        </span>

        <div>
          <button type="button"
                  className="btn btn-outline-primary"
                  onClick={onToggleImportant}>
            !
          </button>

          <button type="button"
                  className="btn btn-outline-danger"
          onClick={onDeleted}>
            X
          </button>
        </div>

      </div>
    )
  }
}