import React from 'react';

class Clear extends React.Component {
  render() {
    return (
      <div className="clear-div">
        <button type="button" className="clearBtn"
           id="clearBtn" onClick={this.props.clearAll}>
           Clear All
        </button>
        <button type="button" className="clearBtn"
           id="saveBtn" onClick={this.props.saveAll}>
           Save All
        </button>
      </div>
    );
  }
}

export default Clear;
