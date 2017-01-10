import React, { PropTypes } from 'react'

const Todo = ({ text }) => (
  <li>
    {text}
  </li>
)

Todo.PropTypes = {
  text: PropTypes.string.isRequired
}

export default Todo
