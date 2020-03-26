import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  getStyle() {
    if(this.props.todo.completed) {
      return 'line-through';
    }
    else {
      return null;
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div className="checkbox-item">
        <input type="checkbox" name="item"
         className="checkbox-input" onChange={this.props.markComplete.bind
           (this, id)}
         checked={this.props.todo.completed} />
        <span className={`text ${this.getStyle()}`}>
          {title}
        </span>
        <button type="button" onClick={this.props.delTodo.bind(this, id)}
         className="deleteBtn">X</button>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem;
