import assert from 'power-assert';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import reducer from '../../../src/js/reducers';
import AddTodo from '../../../src/js/containers/AddTodo';

// storeにreducerとstoreの初期値を設定
let store = createStore(reducer, {
  visibilityFilter: 'SHOW_ALL',
  todos: []
})

describe('AddTodo container', () => {
  it('can add Todo', () => {
    const wrapper = mount(
      <Provider store={store}>
        <AddTodo />
      </Provider>
    )

    wrapper.find('input').node.value = 'test1'
    wrapper.find('button').simulate('click')
    wrapper.find('input').node.value = 'test2'
    wrapper.find('button').simulate('click')

    assert.deepEqual(store.getState().todos, [
      {
        text: 'test1',
        id: 0,
        completed: false
      },
      {
        text: 'test2',
        id: 1,
        completed: false
      }
    ])
  })
})
