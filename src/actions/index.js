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

const setLoadingDispatch = loading => ({
  type: types.SET_LOADING,
  loading,
});

const replaceTodosDispatch = todos => ({
  type: types.REPLACE_TODOS,
  todos,
});

export const addTodo = text => (dispatch, getState) => {
  // const currentTodos = getState().todos;
  // dispatch(addTodoDispatch(text));
  // dispatch(setLoadingDispatch(true));
  // addTodoRequest(text)
  //   .catch(() => dispatch(replaceTodosDispatch(currentTodos)))
  //   .then(() => dispatch(setLoadingDispatch(false)));

  addTodoRequest(text).then(() => dispatch(addTodoDispatch(text)));
};

export const deleteTodo = id => (dispatch, getState) => {
  // const currentTodos = getState().todos;
  // dispatch(deleteTodoDispatch(id));
  // dispatch(setLoadingDispatch(true));
  // deleteTodoRequest(id)
  //   .catch(() => dispatch(replaceTodosDispatch(currentTodos)))
  //   .then(() => dispatch(setLoadingDispatch(false)));

  deleteTodoRequest(id).then(() => dispatch(deleteTodoDispatch(id)));
};

export const editTodo = (id, text) => (dispatch, getState) => {
  // const currentTodos = getState().todos;
  // dispatch(editTodoDispatch(id, text));
  // dispatch(setLoadingDispatch(true));
  // editTodoRequest(id, text)
  //   .catch(() => dispatch(replaceTodosDispatch(currentTodos)))
  //   .then(() => dispatch(setLoadingDispatch(false)));

  editTodoRequest(id, text).then(() => dispatch(editTodoDispatch(id, text)));
};

export const completeTodo = id => dispatch => {
  dispatch(completeTodoDispatch(id));
};

export const clearCompleted = () => dispatch => {
  dispatch(clearCompletedDispatch());
};

export const setVisibilityFilter = filter => dispatch => {
  dispatch(setVisibilityFilterDispatch(filter));
};

const shouldTextFail = text => text.includes('error');

const shouldIdFail = id => id === 0;

const addTodoRequest = text => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldSucceed = !shouldTextFail(text);
      shouldSucceed ? resolve() : reject();
    }, 3000);
  });
};

const deleteTodoRequest = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldSucceed = !shouldIdFail(id);
      shouldSucceed ? resolve() : reject();
    }, 3000);
  });
};

const editTodoRequest = (id, text) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldSucceed = !shouldIdFail(id) && !shouldTextFail(text);
      shouldSucceed ? resolve() : reject();
    }, 3000);
  });
};
