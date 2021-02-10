import React, { Component } from 'react';

import Card from './Card';

import 'bootstrap/dist/css/bootstrap.min.css';

class List extends Component {
  render(){
    return(
      <div className="List" id={`${this.props.id}`}>
        <h3 className="heading">{this.props.heading}</h3>
        <ul><Card></Card></ul>
        <ul><Card></Card></ul>
      </div>
    );
  }
}

export default List;