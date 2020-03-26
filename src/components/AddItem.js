import React from 'react';

class AddItem extends React.Component {
  state = {
    title: '',
    error: ''
  }

  onChange = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.title) {
      this.props.addTodo(this.state.title);
      this.setState({title: '', error: ''});
    }
    else {
      this.setState({error: 'The input is empty!!'})
    }
  }

  render() {
    return (
      <form id="form" onSubmit={this.onSubmit}>
        <div className="error" id="error">
          {this.state.error}
        </div>
        <div className="button-div">
          <input type="text" name="todo" className="todo"
           id="todo" placeholder="Todo Item"
           value={this.state.title}
           onChange={this.onChange} />
         <button type="submit" className="addBtn"
          tabIndex="-1" id="addBtn">
            Add Item
         </button>
        </div>
      </form>
    );
  }
}

export default AddItem;
