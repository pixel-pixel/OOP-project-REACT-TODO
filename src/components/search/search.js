import React from 'react'
import './search.css'

export default function Search({onSearch}) {
    return <input placeholder="search"
                  className="search form-control"
                  onChange={e => onSearch(e.target.value)}
    />
}