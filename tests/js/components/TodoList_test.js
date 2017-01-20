import assert from 'power-assert'
import React from 'react'
import { shallow } from 'enzyme'
import TodoList from '../../../src/js/components/TodoList'

describe('TodoList', () => {
  it('Listの描画', () => {
    const onTodoClick = sinon.spy()
    const todos = [
      {
        id: 0,
        text: 'test1',
        completed: false
      },
      {
        id: 1,
        text: 'test2',
        completed: true
      }
    ]
    const wrapper = shallow(
      <TodoList  onTodoClick={onTodoClick} todos={todos} />
    )
    assert.equal(wrapper.find('Todo').length, 2)

    wrapper.find('Todo').at(1).simulate('click')

    assert.equal(onTodoClick.callCount, 1)
    assert.equal(onTodoClick.calledWith(1), true)
  })
})
