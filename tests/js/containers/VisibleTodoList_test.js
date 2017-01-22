import assert from 'power-assert';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import reducer from '../../../src/js/reducers';
import VisibleTodoList from '../../../src/js/containers/VisibleTodoList';

let store = createStore(reducer, {
  visibilityFilter: 'SHOW_COMPLETED',
  todos: [
    {
      text: 'test1',
      id: 0,
      completed: false,
    },
    {
      text: 'test2',
      id: 1,
      completed: true,
    },
  ]
});

describe('VisibleTodoList containers', () => {
  it('Show Only Completed Todo', () => {
    const wrapper = mount(
      <Provider store={store}>
        <VisibleTodoList />
      </Provider>
    )

    const todoList = wrapper.find('TodoList').at(0)

    assert.deepEqual(todoList.props().todos, [
      {
        text: 'test2',
        id: 1,
        completed: true
      }
    ])

  })
});
