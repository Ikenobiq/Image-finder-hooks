import { Component } from "react/cjs/react.production.min";
import { fields } from "../../fields";

class SearchBar extends Component {
  state = {
    query: "",
  };
  handlechange = (e) => {
    this.setState({ query: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  };
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            {...fields}
            onChange={this.handlechange}
            value={this.query}
            className="SearchForm-input"
          />
        </form>
      </header>
    );
  }
}
export default SearchBar;
