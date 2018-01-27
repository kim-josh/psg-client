import React from 'react';
import {connect} from 'react-redux'
import Autosuggest from 'react-autosuggest';

export class Search extends React.Component {
  
  getSuggestionValue(suggestion) {
    return this.suggestion.name;
  }
  
  renderSuggestion(suggestion) {
    return (
      <span>{this.suggestion.name}</span>
    );
  }
  
  mapStateToProps(state) {
    const { value, suggestions, isLoading } = state;
  
    return {
      value,
      suggestions,
      isLoading
    };
  }
  
  /*
  mapDispatchToProps(dispatch) {
    return {
      onChange(event, { newValue }) {
        dispatch(updateInputValue(newValue));
      },
      onSuggestionsFetchRequested({ value }) {
        dispatch(loadSuggestions(value));
      },
      onSuggestionsClearRequested() {
        dispatch(clearSuggestions());
      }
    };
  }
  */
  render() {
    const { value, suggestions, isLoading, onChange, onSuggestionsFetchRequested, onSuggestionsClearRequested } = this.props;
    const inputProps = {
      placeholder: "Type name of team/player ",
      value,
      onChange
    };
    const status = (isLoading ? 'Loading...' : 'Type to load suggestions');

    return (
      <div>
        <div className="status">
          <strong>Status:</strong> {status}
        </div>
        <Autosuggest 
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={suggestion => this.getSuggestionValue(suggestion)}
          renderSuggestion={suggestion => this.renderSuggestion(suggestion)}
          inputProps={inputProps} />
      </div>
    );
  }
}

export default connect()(Search);

// Codepen example: https://codepen.io/moroshko/pen/ZQLyNK
// https://github.com/moroshko/react-autosuggest