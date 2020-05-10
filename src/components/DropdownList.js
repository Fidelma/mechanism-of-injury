import React, { Component } from 'react'
import './DropdownList.css'

class DropdownList extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
    this.handleToggleOption = this.handleToggleOption.bind(this);
  }

  handleToggleOption(event) {
    this.props.toggleOption(event.target.value);
  }

  render() {
    const options = this.props.options.map((item, index) => {
      let listItemClassName = "list-item";
        if (item.selected) {
          listItemClassName += " list-item-selected"
        }
      return(
        <li
          className={listItemClassName}
          key={index}
          value={index}
          onClick={this.handleToggleOption}
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
}

export default DropdownList;
