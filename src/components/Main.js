import React from 'react';

import AddItem from './AddItem';
import Clear from './Clear';
import Todos from './Todos';

class Main extends React.Component {
  render() {
    return (
      <div className="main" id="main">
        <AddItem addTodo={this.props.addTodo} />
        <form id="form">
          <div className="checkbox-div" id="checkbox-div">
            <Todos todos={this.props.todos}
             markComplete={this.props.markComplete}
             delTodo={this.props.delTodo} />
          </div>
          <Clear clearAll={this.props.clearAll}
                 saveAll={this.props.saveAll} />
        </form>
      </div>
    );
  }
}

export default Main;
