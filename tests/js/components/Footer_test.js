import assert from 'power-assert'

import React from 'react'
import { shallow } from 'enzyme'

import Footer from '../../../src/js/components/Footer'
import FilterLink from '../../../src/js/containers/FilterLink'

describe('Footer', () => {
  const wrapper = shallow(
    <Footer />
  )

  it('contains 3 FilterLink', () => {
    assert.equal(wrapper.find(FilterLink).length, 3)
  })
})
