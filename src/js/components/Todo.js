import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{textDecoration: completed ? 'line-through' : 'none'}}>
    {text}
  </li>
)

Todo.PropTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Todo
