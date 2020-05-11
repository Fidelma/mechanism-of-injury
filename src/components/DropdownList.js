import React from 'react'
import './DropdownList.css'

const DropdownList = (props) => {

  const handleToggleOption = (event) => {
    props.toggleOption(event.target.value);
  };

  const options = props.options.map((item, index) => {
    let listItemClassName = "list-item";
      if (item.selected) {
        listItemClassName += " list-item-selected"
      }
    return(
      <li
        className={listItemClassName}
        key={index}
        value={index}
        onClick={handleToggleOption}
      >
      {item.value.toUpperCase()}
      </li>
    );
  });

  return(
    <div className="list">
       <div className="list-top"></div>
       <ul className="dd-list">
      { options }
      </ul>
    </div>
  );
}

export default DropdownList;
