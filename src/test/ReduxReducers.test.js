import reducers from "../redux/reducers/articles";
import * as types from "../redux/constants/ActionTypes";

describe("Articles reducers", () => {

  it("Should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual([
      {
        text: "Use redux",
        completed: false,
        id: 0
      }
    ])
  });

  it("Should handle Add_TODO", () => {
    expect(
      reducer([], {
        type: types.ADD_TODO,
        text: "Run the tests"
      })
    ).toEqual([
      {
        text: "Run the tests",
        completed: false,
        id: 0
      }
    ])
  });

});
