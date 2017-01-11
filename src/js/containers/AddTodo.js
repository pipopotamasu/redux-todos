import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      {/* input変数に、input要素を格納 */}
      <input ref={(node) => {
        input = node
      }} />
      <button onClick={() => {
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        Add Todo
      </button>
    </div>
  )
}

// storeに格納してあるdispatchオブジェクトを使用可能にしている
AddTodo = connect()(AddTodo)

export default AddTodo
