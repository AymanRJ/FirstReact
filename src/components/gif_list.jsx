import React, { Component } from "react";

import Gif from './gif';

class GifList extends Component {
  handleClick = (event) => {
    // console.log(event);
    this.props.clickedFunction(event);
  }

  renderList = () => {
    return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} clickedFunction={this.handleClick} />);
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}


export default GifList;
