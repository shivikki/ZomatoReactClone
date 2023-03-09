import React, { Component } from 'react'
import './TypeAheadDropDown.css'
export class TypeAheadDropDown extends Component {

  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      text: ''
    }
  }
  onTextChange = (e) => {
    const { iteams } = this.props;
    let suggestions = [];
    const value = e.target.value;
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, `i`);
      suggestions = iteams.sort().filter(v => regex.test(v));
    }


    this.setState(() => ({
      suggestions,
      text: value
    }));
  }


  suggestionSelected = (value) => {
    this.setState(() => ({
      text: value,
      suggestions: []
    }))
  }

  renderSuggestions = () => {
    const { suggestions } = this.state;
    console.log("suggestions :", suggestions);
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <div >
        {suggestions.map(city => <div className='options' key={city} onClick={(e) => this.suggestionSelected(city)}>{city}</div>)}
      </div>
    )
  }


  render() {
    const { text } = this.state;
    const options = this.state.suggestions.length > 0 ?
      (<div className='dropDownOpt'>{this.renderSuggestions()}</div>) :
      (<div></div>)
    return (
      <>
        <div className="TypeAheadDropDown">
          <input onChange={this.onTextChange} placeholder="Search city name" value={text} type="text" />

        </div>
        <div >
          {options}
        </div>
      </>
    );
  }

}

export default TypeAheadDropDown
