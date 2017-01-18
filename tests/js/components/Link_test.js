import assert from 'power-assert'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Link from '../../../src/js/components/Link'

function renderWithProps (props = {}) {
  // 仮想DOMを描画する
  console.log(<Link {...props} />)
  return TestUtils.renderIntoDocument(<Link {...props} />);
}


describe('Link', function () {
  let _rendered, _props, _spies;

  beforeEach(function () {
    _spies = {};

    // propsのモック
    _props = {
      // sinon.jsを使用し、関数をspyする
      onClick: _spies.dispatch = sinon.spy(),
      children: 'test',
      active: true
    };

    _rendered  = renderWithProps(_props);
  });

  // 単純なテキストの表示
  it('spanタグの描画', function () {
    const span = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, 'span');
    assert.equal(span.length, 1)
    assert.equal(span[0].textContent, 'test')
  });

  // // propsが描画される
  // it('<h2>の描画', function () {
  //   const h2 = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, 'h2');
  //   expect(h1.length).toEqual(1);
  //   expect(h1[0].textContent).toEqual('0');
  // });
  //
  // // コンポーネントのテストなので関数が実行されるかどうかまでをテストすればよい
  // it('Incrementボタンをクリックでdispatchが走ること', function () {
  //   const btn = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, 'button');
  //   TestUtils.Simulate.click(btn[0]);
  //
  //   // spyされた関数が実行されたかどうかをチェックする
  //   expect(_spies.dispatch.called).toBe(true);
  // });
});
