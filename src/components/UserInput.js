import React, { useState, Component } from 'react';
import { Input, InputGroup } from 'rsuite';

import { Button } from 'rsuite';

export default function UserInput(props) {
  const [term, setTerm] = useState('');
  // state = { term: '' };

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(term);
  };

  return (
    <div className='ui segment'>
      <form onSubmit={onFormSubmit} className='ui form'>
        <div className='field'>
          <label>Paste URL Here</label>
          <Input type='text' value={term} onChange={setTerm} />
          <Button onClick={onFormSubmit} color='blue'>
            Shorten
          </Button>
        </div>
      </form>
    </div>
  );
}
