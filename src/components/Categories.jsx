import React from 'react'

function Categories({items, onClickItem}) {
const [activeItem, setActiveItem] = React.useState(null);

const onSelectItem = (index) => {
  setActiveItem(index);
};

    return (
        <div className="categories">
            <ul>
              <li onClick={() => onSelectItem(null)}>Alle</li>
    {items.map((name, index) => (
    <li
    className={activeItem === index ? 'active' : ''}
    onClick={() => onSelectItem(index)}
     key={`${name}_${index}`}>
       {name}
       </li>)
    )}
            </ul>
          </div>
    )
}

export default Categories
