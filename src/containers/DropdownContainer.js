import React, { Component } from 'react';
import DropdownButton from '../components/DropdownButton'
import './DropdownContainer.css'

class DropdownContainer extends Component {
  constructor(props){
    super(props);
    this.initialState = {
      multiselect: this.props.dropdownData.multiselect,
      defaultTitle: this.props.dropdownData.defaultTitle,
      subtitle: this.props.dropdownData.subtitle,
      optionSelected: false,
      selectedTitle: this.props.dropdownData.defaultTitle,
      dropdownOptions: this.props.dropdownData.dropdownOptions
    };
    this.state = this.initialState
  this.toggleOption = this.toggleOption.bind(this);
  }

  toggleOption(id) {
    let tempOptions = this.state.dropdownOptions
    if(this.state.multiselect) {
      tempOptions[id].selected = !tempOptions[id].selected

    } else {
      tempOptions.forEach((option, index) => {
        if(index === id) {
          option.selected = !option.selected
        } else {
          option.selected = false
        }
      });
    }
    this.setState({dropdownOptions: tempOptions}, () => {
      this.updateTitle()
    })
  }

  updateTitle() {
    let newTitle = []
    this.state.dropdownOptions.forEach((option) => {
      if (option.selected) {
        newTitle.push(option.value)
      }
    });
    if (newTitle.length === 0) {
      newTitle.push(this.state.defaultTitle)
      this.setState({optionSelected: false})
    } else {
      this.setState({optionSelected: true})
    }
    this.setState({selectedTitle: newTitle.join(', ')})
  }

  render() {
    return (
      <div className="dropdown-container">
        <DropdownButton
          title={this.state.selectedTitle} options={this.state.dropdownOptions}
          toggleOption={this.toggleOption}
          subtitle={this.state.subtitle}
          optionSelected={this.state.optionSelected}
        />
      </div>
    );
  }
}

export default DropdownContainer;
