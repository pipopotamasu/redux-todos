import React from 'react'
import assert from 'power-assert';
import { shallow } from 'enzyme';

import Footer from '../../../src/js/components/Footer'
import AddTodo from '../../../src/js/containers/AddTodo'
import VisibleTodoList from '../../../src/js/containers/VisibleTodoList'
import App from '../../../src/js/components/App'

describe('App', () => {
  it('includes AddTodo, VisibleTodoList, Footer', () => {
    const wrapper = shallow(
      <App />
    );

    assert.equal(wrapper.find(AddTodo).length, 1);
    assert.equal(wrapper.find(VisibleTodoList).length, 1);
    assert.equal(wrapper.find(Footer).length, 1);
  });
});
