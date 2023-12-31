
import { useEffect, useRef, useState } from 'react';
import Form from './Form';
import { nanoid } from 'nanoid';
import Item from './Item';
import './style.css';



const App = () => {
  const focus=useRef(null)
  const getls=()=>{
    const user=(localStorage.getItem("aahira"));
  
    if(user){
      return JSON.parse(localStorage.getItem("aahira"))
    }else{
      return []
    }
  }
  const [items, setItems] = useState(getls());

  const addItem = (new1) => {
    const newItem = {
      name: new1,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    // console.log(itemName)
   
  };

  const removeItem = (new1) => {
    console.log(new1)
    const newItems = items.filter((item) => item.id !== new1);
    setItems(newItems);
   
  };

  const editItem = (itemId) => {
    
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    
  };
  useEffect(()=>{
    localStorage.setItem("aahira",JSON.stringify(items))
  },[items]);
  useEffect(()=>{
    focus.current.focus();
  })
  return (
    <section className='section-center'>
      
      <Form addItem={addItem} focus={focus} />
      <Item items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
};
export default App;