import React from 'react';
import './index.css';

class Card extends React.Component {
  render() {
    return <p className='card'>{this.props.content}<input type="button" value="X"
    onClick={() => this.props.removeTask(this.props.id)} /></p>


  }
}

export default Card;