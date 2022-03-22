import React from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import styles from './TodoItem.module.css';

class TodoItem extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      editing: false,
    };
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  }

  handleUpdatedDone = (e) => {
    if (e.key === 'Enter') {
      this.setState({ editing: false });
    }
  }

  render() {
    const {
      todo, handleChangeProps, deleteTodoProps, setUpdate,
    } = this.props;
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };
    const viewMode = {};
    const editMode = {};
    const { editing } = this.state;

    if (editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }
    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={todo.completed}
            onChange={() => handleChangeProps(todo.id)}
          />
          <span style={todo.completed ? completedStyle : null}>
            {todo.title}
          </span>
          <button type="button" onClick={() => deleteTodoProps(todo.id)}>
            <button type="button" onClick={() => deleteTodoProps(todo.id)}>
              <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
            </button>
          </button>
        </div>
        <input
          type="text"
          className={styles.textInput}
          style={editMode}
          value={todo.title}
          onChange={(e) => {
            setUpdate(e.target.value, todo.id);
          }}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    );
  }
}

TodoItem.defaultProps = {
  todo: [],
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    completed: PropTypes.bool,
    id: PropTypes.string,
    title: PropTypes.string,
  }),
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodoItem;
