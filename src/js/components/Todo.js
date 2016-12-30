import React, { PropTypes } from 'react'

const Todo = ({ text }) => (
  <li>
    {text}
  </li>
)

Todo.propType = {
  text: PropTypes.string.isRequired
}

export default Todo
