import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

class Card extends Component {
  render(){
    return(
      <div className="Card">
        <h4>{this.props.title}</h4>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default Card;