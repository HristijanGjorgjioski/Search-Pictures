import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';

class App extends React.Component {
  state = { images: [] };

  onSearchSumbit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID WGYm1KAd29kz8gSbrSZMWUP0rjvpGeJkL1EeuysPW5o',
      },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSumbit} />
        Found: {this.state.images.length} images.
      </div>
    );
  }
}

export default App;
