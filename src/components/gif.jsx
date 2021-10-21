import React, { Component } from "react";

class Gif extends Component {
  handleClick = (event) => {
    // console.log(event.target)
    this.props.clickedFunction(event.target.src);
  }

  render() {
    const src = `https://media0.giphy.com/media/${this.props.id}/giphy.gif`
    return (
      <img src={src} alt="gif" className="gif" onClick={this.handleClick}/>
    )
  }
}

export default Gif;
