import React, { Component } from 'react';
import DropdownContainer from './DropdownContainer';
import './MechanismOfInjuryContainer.css';

class MechanismOfInjuryContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      singleSelect: {
        multiselect: false,
        defaultTitle: 'Mechanism',
        subtitle: 'Mechanism of Injury',
        dropdownOptions: [
          {
            value: 'Abrasion',
            selected: false
          },
          {
            value: 'Blunt',
            selected: false
          },
          {
            value: 'Burn',
            selected: false
          },
          {
            value: 'Frost',
            selected: false
          },
          {
            value: 'Gun Shot',
            selected: false
          },
          {
            value: 'Laceration',
            selected: false
          },
          {
            value: 'RTC',
            selected: false
          },
          {
            value: 'Stab',
            selected: false
          }
        ]
      },
      multiSelect: {
        multiselect: true,
        defaultTitle: 'Mechanism',
        subtitle: 'Mechanism of Injury',
        dropdownOptions: [
          {
            value: 'Abrasion',
            selected: false
          },
          {
            value: 'Blunt',
            selected: false
          },
          {
            value: 'Burn',
            selected: false
          },
          {
            value: 'Frost',
            selected: false
          },
          {
            value: 'Gun Shot',
            selected: false
          },
          {
            value: 'Laceration',
            selected: false
          },
          {
            value: 'RTC',
            selected: false
          },
          {
            value: 'Stab',
            selected: false
          }
        ]
      }
    }
  }
  render() {
    return (
      <div className="dropdowns">
        <DropdownContainer dropdownData={this.state.singleSelect}/>
        <DropdownContainer dropdownData={this.state.multiSelect}/>
      </div>
    )
  }
}

export default MechanismOfInjuryContainer
