import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleTodo } from '../actions'

const mapStateToProps = (state) => {
  return { todos: state.todos }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      console.log(id)
      dispatch(toggleTodo(id))
    }
  }
}

// TodoListのPropsとして、stateのtodosを渡せるようにしている
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
export default VisibleTodoList
