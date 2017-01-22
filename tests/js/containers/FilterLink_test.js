import assert from 'power-assert';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import reducer from '../../../src/js/reducers';
import FilterLink from '../../../src/js/containers/FilterLink';

let store = createStore(reducer)

describe('FilterLink container', () => {
  it('return <Link>', () => {
    const wrapper = mount(
      <Provider store={store}>
        <FilterLink filter="SHOW_COMPLETED">SHOW COMPLETED</FilterLink>
      </Provider>
    )

    const link = wrapper.find('Link').at(0)

    assert.equal(link.props().active, false)

    link.simulate('click')

    assert.equal(link.props().active, true)
  });
});
