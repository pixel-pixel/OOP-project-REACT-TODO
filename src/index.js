import React from 'react'
import ReactDOM from 'react-dom'

import AppHeader from "./components/AppHeader";
import Search from "./components/Search";
import TodoList from "./components/TodoList";

const App = () => {
    const todoData = [
        {id: 0, label: 'lol'},
        {id: 1, label: 'kek', important: true},
        {id: 2, label: 'cheburek'}
    ]

    return (
        <div>
            <AppHeader/>
            <Search/>
            <TodoList todos={todoData}/>
        </div>
    )
}


ReactDOM.render(<App/>, document.getElementById('root'))