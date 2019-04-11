import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import expect from "expect";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Actions", () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it("Creates FETCH_TODOS_SUCCESS when fetching todos has been done",() => {
    fetchMonk
      .getOnce("/todos", {
        body: {
          todos: ["do something"]
        },
        headers: {
          "content-type": "application/json"
        }
      })

    const expectedActions = [
      { type: types.FETCH_TODOS_REQUEST },
      { type: types.FETCH_TODOS_SUCCESS, body: { todos: ["do something"] } }
    ];

    const store = mockStore({ todos: [] });

    return store.dispatch(actions.fetchTodos()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    })
  });

});
