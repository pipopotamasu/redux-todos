import assert from 'power-assert'
import visibilityFilter from '../../../src/js/reducers/visibilityFilter'

describe('test visibilityFilter', () => {
  describe('test return default state', () => {
    it("test case default(invalid state)", () => {
      const state = "hoge"
      const action = { type : "SHOW_ALL" }
      assert.equal(visibilityFilter(state, action), state);
    });

    it("test case default(SHOW_ALL)", () => {
      const state = "SHOW_ALL"
      const action = { type : "SHOW_ALL" }
      assert.equal(visibilityFilter(state, action), state);
    });
  });

  describe('test return registered action', () => {
    it("test case SET_VISIBIRITY_FILTER", () => {
      const state = "SHOW_ALL"
      const action = { type : "SET_VISIBIRITY_FILTER", filter : "SHOW_COMPLETED" }
      assert.equal(visibilityFilter(state, action), "SHOW_COMPLETED");
    });
  });
});
