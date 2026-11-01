import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  searchResult = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachOne =>
      eachOne.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <h1 className="main-heading">Destination Search</h1>
        <div className="search-container">
          <input
            type="search"
            onChange={this.searchResult}
            value={searchInput}
            className="search-element"
            placeholder="Search"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>
        <ul className="lists-container">
          {searchResults.map(eachOne => (
            <DestinationItem key={eachOne.id} destinationsList={eachOne} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
