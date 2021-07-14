import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    term: '',
  };
  onFormSubmit = (e) => {
      e.preventDefault();
      // TODO: Make sure to callback from parent component
      this.props.onFormSubmit(this.state.term)
  } 
  render() {
    return (
      <div className='ui segment search-bar'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label htmlFor=''>Video Search via YouTube</label>
            <input
              type='text'
              value={this.state.term}
              placeholder='Try searching "Andre 3000"'
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
