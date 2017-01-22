import assert from 'power-assert'
import { addTodo, toggleTodo, setVisibilityFilter } from '../../../src/js/actions'

describe('test action creator', () => {
  it("test add todo 1th", () => {
    const expectedAction = { type: 'ADD_TODO', id: 0, text: 'test' }
    assert.deepEqual(addTodo('test'), expectedAction);
  });

  it("test add todo 2th", () => {
    const expectedAction = { type: 'ADD_TODO', id: 1, text: 'test' }
    assert.deepEqual(addTodo('test'), expectedAction);
  });

  it("test toggle todo", () => {
    const expectedAction = { type: 'TOGGLE_TODO', id: 1 }
    assert.deepEqual(toggleTodo(1), expectedAction);
  });

  it("test setVisibilityFilter", () => {
    const expectedAction = { type: 'SET_VISIBIRITY_FILTER', filter: 'SHOW_ALL' }
    assert.deepEqual(setVisibilityFilter('SHOW_ALL'), expectedAction);
  });
});
