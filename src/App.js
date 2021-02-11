import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Card from './components/Card';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    tasks: [
      { id: '001', title: 'Have progress w/ Weekday', content: 'Work on Drag and Drop context.' },
      { id: '002', title: 'Study for STADVDB Finals', content: 'Make sure to focus on the transactions and OLAP queries.' },
      { id: '003', title: 'Write In the Mood', content: 'Finish Chapters 2 and 3.' },
      { id: '004', title: 'Trim fingernails', content: null },
      { id: '005', title: 'Haircut', content: null },
      { id: '006', title: 'Cook lunch', content: 'Chicken tenders, Lamb curry, Shrimp fried rice.' },
      { id: '007', title: 'Read Kitchen Confidential', content: 'Finish 5 chapters.' },
      { id: '008', title: 'Have progress w/ beat', content: 'Try to add the kicks and snares to the melody.' }
    ],
    cards: [
      { id: '001', title: 'Have progress w/ Weekday', content: 'Work on Drag and Drop context.' },
      { id: '002', title: 'Study for STADVDB Finals', content: 'Make sure to focus on the transactions and OLAP queries.' },
      { id: '003', title: 'Write In the Mood', content: 'Finish Chapters 2 and 3.' },
      { id: '004', title: 'Trim fingernails', content: null },
      { id: '005', title: 'Haircut', content: null },
      { id: '006', title: 'Cook lunch', content: 'Chicken tenders, Lamb curry, Shrimp fried rice.' },
      { id: '007', title: 'Read Kitchen Confidential', content: 'Finish 5 chapters.' },
      { id: '008', title: 'Have progress w/ beat', content: 'Try to add the kicks and snares to the melody.' }
    ],
    updateCards: [
      { id: '001', title: 'Have progress w/ Weekday', content: 'Work on Drag and Drop context.' },
      { id: '002', title: 'Study for STADVDB Finals', content: 'Make sure to focus on the transactions and OLAP queries.' },
      { id: '003', title: 'Write In the Mood', content: 'Finish Chapters 2 and 3.' },
      { id: '004', title: 'Trim fingernails', content: null },
      { id: '005', title: 'Haircut', content: null },
      { id: '006', title: 'Cook lunch', content: 'Chicken tenders, Lamb curry, Shrimp fried rice.' },
      { id: '007', title: 'Read Kitchen Confidential', content: 'Finish 5 chapters.' },
      { id: '008', title: 'Have progress w/ beat', content: 'Try to add the kicks and snares to the melody.' }
    ]
  }

  handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(this.state.cards);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    this.updateCards(items);
  }

  render(){
    return(
      <div className="App">
        <Container>
          <h1 className="name">Weekday.</h1>
          <hr/>

          <Row xs="3">
          <DragDropContext onDragEnd={this.handleOnDragEnd}>
            <h3 className="heading">Not Started</h3>
            <hr/>
            <Droppable droppableId="cards">
              {(provided) => (
                <ul className="list cards" id="notStarted" {...provided.droppableProps} ref={provided.innerRef}>
                  {this.state.cards.map(({id, title, content}, index) => {
                    return (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <Card title={title} content={content}></Card>
                          </li>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>

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
