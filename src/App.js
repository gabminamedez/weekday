import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import List from './components/List';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render(){
    return(
      <div className="App">
        <Container>
          <h1 className="title">Weekday.</h1>
          <hr/>

          <Row xs="3">
            <List id="notStarted" heading="Not Started">
            </List>

            <List id="inProgress" heading="In Progress">
            </List>

            <List id="completed" heading="Completed">
            </List>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
