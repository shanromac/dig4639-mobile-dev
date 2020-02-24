import React from 'react';
import './index.css';

class Card extends React.Component {
  render() {
  return(<h1>{this.props.content}</h1>);
  }
}

export default Card;