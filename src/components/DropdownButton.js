import React, { Component } from 'react'
import DropdownList from './DropdownList.js'
import './DropdownButton.css'

class DropdownButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      dropdownOpen: false,
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleToggleOption = this.handleToggleOption.bind(this);
  }

  toggleDropdown() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  handleToggleOption(event) {
    this.props.toggleOption(event.target.value);
  }

  render() {
    let buttonClassName = "dd-button";
      if (this.props.optionSelected) {
        buttonClassName += " option-selected"
      }

    return(
      <div className="dd-wrapper">
        <div className={buttonClassName} onClick={this.toggleDropdown}>
          <div className="title">{this.props.title.toUpperCase()}</div>
          {this.props.optionSelected && <div className="subtitle">
          {this.props.subtitle}
          </div>}
        </div>
        {this.state.dropdownOpen &&
          <DropdownList
            options={this.props.options} toggleOption={this.props.toggleOption}/>}
      </div>
    );
  }
}

export default DropdownButton;
