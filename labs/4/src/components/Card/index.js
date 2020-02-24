import React from 'react';
import './index.css';

class Card extends React.Component {
  render() {
  return(
  <div class="title">
    <h3>{this.props.title}</h3>
    <p>{this.props.content}</p>
  </div>
  );
  }
}

export default Card;