import Singleitem from './Singleitem';
import './style.css';
const Item = ({ items, removeItem, editItem }) => {
  return (
    <div className='items'>
      {items.map((item) => {
        return (
          <Singleitem
            key={item.id}
            item={item}
            removeItem={removeItem}
            editItem={editItem}
          />
        );
      })}
    </div>
  );
};
export default Item;
