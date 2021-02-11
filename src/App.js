import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Card from './components/Card';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render(){
    return(
      <div className="App">
        <Container>
          <h1 className="title">Weekday.</h1>
          <hr/>

          <Row xs="3">
            <div className="list" id="notStarted">
              <h3 className="heading">Not Started</h3>
              <hr/>

              <ul>
                <li><Card></Card></li>
                <li><Card></Card></li>
              </ul>
            </div>

            <div className="list" id="inProgress">
              <h3 className="heading">In Progress</h3>
              <hr/>

              <ul>
                <Card></Card>
              </ul>
            </div>

            <div className="list" id="completed">
              <h3 className="heading">Completed</h3>
              <hr/>

              <ul>
                <Card></Card>
              </ul>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
