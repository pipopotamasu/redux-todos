import assert from 'power-assert'
import todos from '../../../src/js/reducers/todos'

describe('test todos', () => {
  describe('test default', () => {
    it("test case default", () => {
      const state = []
      const action = { type : "hoge" }
      assert.equal(todos(state, action), state);
    });
  });

  describe('test ADD_TODO', () => {
    it("test case Not has state", () => {
      const state = []
      const action = { id : 1, text : "test", type: "ADD_TODO" }
      const expected = [{ id : 1, text : "test", completed: false }]
      assert.deepEqual(todos(state, action), expected);
    });

    it("test case has state", () => {
      const state = [{ id : 1, text : "test", completed: false }]
      const action = { id : 2, text : "test", type: "ADD_TODO" }
      const expected = [{ id : 1, text : "test", completed: false }, { id : 2, text : "test", completed: false }]
      assert.deepEqual(todos(state, action), expected);
    });
  });

  describe('test TOGGLE_TODO', () => {
    it("test case Not has state", () => {
      const state = []
      const action = { id : 1, type: "TOGGLE_TODO" }
      const expected = [{ id : 1, text : "test", completed: false }]
      assert.deepEqual(todos(state, action), state);
    });

    it("test case has state without macthing id", () => {
      const state = [{ id : 1, completed : false }]
      const action = { id : 2, type: "TOGGLE_TODO" }
      const expected = [{ id : 1, completed : false }]
      assert.deepEqual(todos(state, action), state);
    });

    it("test case has state with macthing id", () => {
      const state = [{ id : 1, completed : false }]
      const action = { id : 1, type: "TOGGLE_TODO" }
      const expected = [{ id : 1, completed : true }]
      assert.deepEqual(todos(state, action), expected);
    });
  });
});
