import assert from 'power-assert'

import React from 'react'
import { shallow } from 'enzyme'

import Todo from '../../../src/js/components/Todo'

describe('Todo', () => {
  it('liタグの描画', () => {
    const onClick = sinon.spy()
    const completed = false
    const text = 'text'
    const wrapper = shallow(
      <Todo  onClick={onClick} completed={completed} text={text} />
    )
    assert.equal(wrapper.find('li').length, 1)

    wrapper.find('li').simulate('click')

    assert.equal(onClick.callCount, 1)
  })
})
