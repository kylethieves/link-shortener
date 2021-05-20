import React from 'react';
//import { Input, InputGroup } from 'rsuite';

import { Button } from 'rsuite';

class UserInput extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Paste URL Here</label>
            <input
              type='text'
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            <Button onClick={this.onFormSubmit} color='blue'>
              Shorten
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default UserInput;
