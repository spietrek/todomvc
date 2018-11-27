import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ filteredTodos, loading, actions }) => (
  <ul className="todo-list" style={{ opacity: loading ? 0.2 : 1 }}>
    {filteredTodos.map(todo => (
      <TodoItem key={todo.id} todo={todo} {...actions} />
    ))}
  </ul>
);

TodoList.propTypes = {
  filteredTodos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  loading: PropTypes.bool,
  actions: PropTypes.object.isRequired,
};

export default TodoList;
