export const SEARCH = 'SEARCH';  // This is some action type to use internally,
export const UPDATE = 'UPDATE';  // Use as many action types as you need, of course.

const actions = {
  search() {
    return { type: SEARCH };
  },

  update() {
    return { type: UPDATE };
  }
};

// The state(s) might change depending on which action type is dispatched.
const reducers = {
  data(state = [], action) {  // We have a `count` reducer with an initial state of 0
    switch (action.type) {    // that changes if INCREMENT or DECREMENT is dispatched.
      case SEARCH:
        return [{id:0,name:"joe"},{id:1,name:"john"},{id:2,name:"Brad"},{id:3,name:"Jack"},{id:4,name:"Andrew"},{id:5,name:"joe"},{id:6,name:"john"},{id:7,name:"Brad"},{id:8,name:"Jack"},{id:9,name:"Andrew"}];

      case UPDATE:
        return [{id:0,name:"joe"},{id:1,name:"john"},{id:2,name:"Brad"},{id:3,name:"Jack"},{id:4,name:"Andrew"},{id:5,name:"joe"},{id:6,name:"john"},{id:7,name:"Brad"},{id:8,name:"Jack"},{id:9,name:"Andrew"}];

      default:
        return state;
    }
  }
};

export default { actions, reducers };
