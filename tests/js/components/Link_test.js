import assert from 'power-assert'
import React from 'react'
import { render } from 'react-dom'
import { shallow } from 'enzyme'
import Link from '../../../src/js/components/Link'


describe('Link', function () {
  // 単純なテキストの表示
  it('spanタグのレンダリング', function () {
    const onClick = sinon.spy()
    const active = true
    const children = 'test'
    const wrapper = shallow(
      <Link active={active} onClick={onClick}>{children}</Link>
    )

    assert.equal(wrapper.find('span').text(), 'test')
  });

  it('aタグのレンダリング', () => {
    // spyでonClickのファンクションをモックする
    const onClick = sinon.spy()
    const active = false
    const children = 'test'
    // shallowでJSXを擬似的にレンダリングし、DOMオブジェクトを作る
    const wrapper = shallow(
      <Link active={active} onClick={onClick}>{children}</Link>
    );

    // wrapperにレンダリングされたDomオブジェクトからテキストを取り出しアサーション
    assert.equal(wrapper.find('a').text(), 'test')

    // simulate関数の第二引数で、eventオブジェクトをモックする
    wrapper.find('a').at(0).simulate('click', { preventDefault: ()=> undefined })

    // spyでモックした関数が呼ばれた回数を比較する
    assert.equal(onClick.callCount, 1)
  });
});
