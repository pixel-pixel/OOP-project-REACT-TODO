import React, {Component} from 'react'
import './list-filter.css'

export default class ListFilter extends Component {

  state = {
    show: 'all'
  }

  showAll = e => {
    this.setState({show: 'all'})
    this.props.onShowAll(e)
  }

  showActive = e => {
    this.setState({show: 'active'})
    this.props.onShowActive(e)
  }

  showDone = e => {
    this.setState({show: 'done'})
    this.props.onShowDone(e)
  }

  render() {
    let allBtnClasses
    let activeBtnClasses
    let doneBtnClasses

    switch (this.state.show) {
      case "all":
        allBtnClasses = 'btn btn-primary'
        activeBtnClasses = 'btn btn-outline-primary'
        doneBtnClasses = 'btn btn-outline-primary'
        break
      case "active":
        allBtnClasses = 'btn btn-outline-primary'
        activeBtnClasses = 'btn btn-primary'
        doneBtnClasses = 'btn btn-outline-primary'
        break
      default:
        allBtnClasses = 'btn btn-outline-primary'
        activeBtnClasses = 'btn btn-outline-primary'
        doneBtnClasses = 'btn btn-primary'
    }

    return (
      <div className="list-filter btn-group">
        <button type="button"
                className={allBtnClasses}
                onClick={this.showAll}>All</button>
        <button type="button"
                className={activeBtnClasses}
                onClick={this.showActive}>Active</button>
        <button type="button"
                className={doneBtnClasses}
                onClick={this.showDone}>Done</button>
      </div>
    )
  }
}