import { useState } from 'react';
import './style.css';

const Form = ({ addItem ,focus}) => {
  const [newItemName, setNewItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) return
  
    addItem(newItemName);
    setNewItemName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className='form-control'>
        <input
        ref={focus}
          type='text '
          className='form-input'
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type='submit' className='btn'>
          add item
        </button>
      </div>
    </form>
  );
};
export default Form;
