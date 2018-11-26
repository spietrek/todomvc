import * as types from '../constants/ActionTypes';

const addTodoDispatch = text => ({
  type: types.ADD_TODO,
  text,
});

const deleteTodoDispatch = id => ({
  type: types.DELETE_TODO,
  id,
});

const editTodoDispatch = (id, text) => ({
  type: types.EDIT_TODO,
  id,
  text,
});

const completeTodoDispatch = id => ({
  type: types.COMPLETE_TODO,
  id,
});

const clearCompletedDispatch = () => ({
  type: types.CLEAR_COMPLETED,
});

const setVisibilityFilterDispatch = filter => ({
  type: types.SET_VISIBILITY_FILTER,
  filter,
});

export const addTodo = text => (dispatch, getState) => {
  taskRequest()
    .then(() => dispatch(addTodoDispatch(text)))
    .catch(() => dispatch(addTodoDispatch(text)));
};

export const deleteTodo = id => (dispatch, getState) => {
  dispatch(deleteTodoDispatch(id));
};

export const editTodo = (id, text) => (dispatch, getState) => {
  dispatch(editTodoDispatch(id, text));
};

export const completeTodo = id => (dispatch, getState) => {
  dispatch(completeTodoDispatch(id));
};

export const clearCompleted = () => (dispatch, getState) => {
  dispatch(clearCompletedDispatch());
};

export const setVisibilityFilter = filter => (dispatch, getState) => {
  dispatch(setVisibilityFilterDispatch(filter));
};

const taskRequest = task => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // const shouldSucceed = !shouldFail(taskId);
      const shouldSucceed = true;
      // console.log(`HTTP /like_Task/${taskId}?like=${like} (${shouldSucceed ? 'success' : 'failure'})`);
      shouldSucceed ? resolve() : reject();
    }, 3000);
  });
};
