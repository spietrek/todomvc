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
  // 1
  addTodoRequest(text).then(() => dispatch(addTodoDispatch(text)));

  // 2
  // dispatch(setLoadingDispatch(true));
  // addTodoRequest(text).then(() => dispatch(setLoadingDispatch(false)));

  // 3
  // const todos = getState().todos;
  // dispatch(addTodoDispatch(text));
  // addTodoRequest(text).catch(() => dispatch(replaceTodosDispatch(todos)));

  // 4
  // const todos = getState().todos;
  // dispatch(addTodoDispatch(text));
  // dispatch(setLoadingDispatch(true));
  // addTodoRequest(text)
  //   .catch(() => dispatch(replaceTodosDispatch(todos)))
  //   .then(() => dispatch(setLoadingDispatch(false)));
};

export const deleteTodo = id => (dispatch, getState) => {
  // 1
  deleteTodoRequest(id).then(() => dispatch(deleteTodoDispatch(id)));

  // 2
  // dispatch(setLoadingDispatch(true));
  // deleteTodoRequest(id).then(() => dispatch(setLoadingDispatch(false)));

  // 3
  // const todos = getState().todos;
  // dispatch(deleteTodoDispatch(id));
  // dispatch(setLoadingDispatch(true));
  // deleteTodoRequest(id)
  //   .catch(() => dispatch(replaceTodosDispatch(todos)))
  //   .then(() => dispatch(setLoadingDispatch(false)));

  // 4
  // const deletedTodo = getState().todos.find(item => item.id === id);
  // dispatch(deleteTodoDispatch(id));
  // dispatch(setLoadingDispatch(true));
  // deleteTodoRequest(id)
  //   .catch(() => {
  //     const todos = [...getState().todos, deletedTodo];
  //     dispatch(replaceTodosDispatch(todos));
  //   })
  //   .then(() => dispatch(setLoadingDispatch(false)));
};

export const editTodo = (id, text) => (dispatch, getState) => {
  // 1
  editTodoRequest(id, text).then(() => dispatch(editTodoDispatch(id, text)));

  // 2
  // dispatch(setLoadingDispatch(true));
  // editTodoRequest(id, text).then(() => dispatch(setLoadingDispatch(false)));

  // 3
  // const todos = getState().todos;
  // dispatch(editTodoDispatch(id, text));
  // dispatch(setLoadingDispatch(true));
  // editTodoRequest(id, text)
  //   .catch(() => dispatch(replaceTodosDispatch(todos)))
  //   .then(() => dispatch(setLoadingDispatch(false)));
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

const shouldTextFail = text => text.toLowerCase().includes('error');

const shouldIdFail = id => id === 0;

const addTodoRequest = text => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldSucceed = !shouldTextFail(text);
      shouldSucceed ? resolve() : reject();
    }, 1500);
  });
};

const deleteTodoRequest = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldSucceed = !shouldIdFail(id);
      shouldSucceed ? resolve() : reject();
    }, 1500);
  });
};

const editTodoRequest = (id, text) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldSucceed = !shouldIdFail(id) && !shouldTextFail(text);
      shouldSucceed ? resolve() : reject();
    }, 1500);
  });
};
