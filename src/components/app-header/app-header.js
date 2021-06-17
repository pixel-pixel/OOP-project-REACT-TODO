import React from 'react'
import './app-header.css'

export default function AppHeader({todo, important}) {
    return (
        <div className="app-header">
            <h1 className="fw-bold">Todo list</h1>
            <p className="text-muted">{todo} more todo, {important} important</p>
        </div>
    )
}
