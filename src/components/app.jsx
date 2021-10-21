import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: null
    };
  }

  search = (query) => {
    giphy("ivtF6688GigwtZjL1TCC4cqVpXa9cCsv").search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  clicked = (gif) => {
    console.log(gif);
    const key = gif.match(/media\/((.)*[A-Z])\w+/);
    console.log(key[0].split("/")[1]);
    const id = key[0].split("/")[1];
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>

        <div className="right-scene">
          <GifList gifs={this.state.gifs} clickedFunction={this.clicked} />
        </div>
      </div>
    );
  }
}

export default App;
