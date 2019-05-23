import React, { Component } from "react";

class App extends Component {
  state = {
    results: [],
    history: [],
    searchText: "",
    error: "",
    showHistory: false,
    language: "",
    fields: ""
  };
  handleChange = e => {
    this.setState({
      searchText: e.target.value
    });
  };
  removeDuplicates = arr1 => {
    let obj = {};
    for (var i = 0, len = arr1.length; i < len; i++)
      obj[arr1[i]["name"]] = arr1[i];
    let data = [];
    for (var key in obj) data.push(obj[key]);
    return data;
  };
  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.searchText) {
      return this.setState({
        error: true,
        results: []
      });
    }
    this.setState({
      history: this.removeDuplicates([
        ...this.state.history,
        { name: this.state.searchText }
      ]),
      results: this.props.data
        .filter(
          item =>
            item.name
              .toLowerCase()
              .indexOf(this.state.searchText.toLowerCase()) > -1
        )
        .filter(item => item.language.indexOf(this.state.language) > -1)
        .filter(item => item.fields.indexOf(this.state.fields) > -1),
      error: false
    });
  };
  renderResults = () => {
    if (this.state.results.length > 0) {
      return (
        <div>
          <div>Search results :-</div>
          <div>---------------------------------</div>
          {this.state.results.map(item => (
            <div key={item.id}>
              {item.id} {item.name} {item.language} {item.fields}
            </div>
          ))}
        </div>
      );
    }
    return null;
  };
  handleOptions = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="search">Advanced Search</label>
            <input
              type="text"
              value={this.state.searchText}
              onChange={this.handleChange}
            />
            <button type="submit">search</button>&nbsp; languages :-
            <select name="language" onChange={this.handleOptions}>
              <option value="" />
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
            </select>
            &nbsp; fields :-
            <select name="fields" onChange={this.handleOptions}>
              <option value="" />
              <option value="xyz">xyz</option>
              <option value="pqr">pqr</option>
            </select>
          </form>
          <div
            onClick={() => {
              this.setState({ showHistory: !this.state.showHistory });
            }}
          >
            search history
          </div>
          <div style={{ display: "flex" }}>
            {this.state.showHistory &&
              this.state.history.map(item => (
                <div
                  key={item.name}
                  style={{
                    textDecoration: "underline",
                    color: "blue",
                    margin: "0 5px"
                  }}
                  onClick={() =>
                    this.handleChange({ target: { value: item.name } })
                  }
                >
                  {item.name}
                </div>
              ))}
          </div>
        </div>

        <div>{this.renderResults()}</div>
        {this.state.error && (
          <div style={{ color: "red" }}>Do valid search</div>
        )}
      </div>
    );
  }
}

export default App;
