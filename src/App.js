import React, { useState } from 'react';
import { Container, Row } from 'reactstrap';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Card from './components/Card';

import 'bootstrap/dist/css/bootstrap.min.css';

const arr1 = [
  { id: '001', title: 'Have progress w/ Weekday', content: 'Work on Drag and Drop context.' },
  { id: '002', title: 'Study for STADVDB Finals', content: 'Make sure to focus on the transactions and OLAP queries.' },
  { id: '003', title: 'Write In the Mood', content: 'Finish Chapters 2 and 3.' },
  { id: '004', title: 'Trim fingernails', content: null },
  { id: '005', title: 'Haircut', content: null },
  { id: '006', title: 'Cook lunch', content: 'Chicken tenders, Lamb curry, Shrimp fried rice.' },
  { id: '007', title: 'Read Kitchen Confidential', content: 'Finish 5 chapters.' },
  { id: '008', title: 'Have progress w/ beat', content: 'Try to add the kicks and snares to the melody.' }
]

const arr2 = []

const arr3 = []

function App() {
  const [cards1, updateCards1] = useState(arr1);
  const [cards2, updateCards2] = useState(arr2);
  const [cards3, updateCards3] = useState(arr3);

  function handleOnDragEnd(result){
    if (!result.destination) return;

    if(result.source.droppableId === 'cards1' & result.destination.droppableId === 'cards1'){
      const items = Array.from(cards1);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      updateCards1(items);
    }
    else if(result.source.droppableId === 'cards2' & result.destination.droppableId === 'cards2'){
      const items = Array.from(cards2);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      updateCards2(items);
    }
    else if(result.source.droppableId === 'cards3' & result.destination.droppableId === 'cards3'){
      const items = Array.from(cards3);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      updateCards3(items);
    }
    else if(result.source.droppableId === 'cards1' & result.destination.droppableId === 'cards2'){
      const items_source = Array.from(cards1);
      const items_dest = Array.from(cards2);
      const [reorderedItem] = items_source.splice(result.source.index, 1);
      items_dest.splice(result.destination.index, 0, reorderedItem);
      updateCards1(items_source);
      updateCards2(items_dest);
    }
    else if(result.source.droppableId === 'cards1' & result.destination.droppableId === 'cards3'){
      const items_source = Array.from(cards1);
      const items_dest = Array.from(cards3);
      const [reorderedItem] = items_source.splice(result.source.index, 1);
      items_dest.splice(result.destination.index, 0, reorderedItem);
      updateCards1(items_source);
      updateCards3(items_dest);
    }
    else if(result.source.droppableId === 'cards2' & result.destination.droppableId === 'cards1'){
      const items_source = Array.from(cards2);
      const items_dest = Array.from(cards1);
      const [reorderedItem] = items_source.splice(result.source.index, 1);
      items_dest.splice(result.destination.index, 0, reorderedItem);
      updateCards2(items_source);
      updateCards1(items_dest);
    }
    else if(result.source.droppableId === 'cards2' & result.destination.droppableId === 'cards3'){
      const items_source = Array.from(cards2);
      const items_dest = Array.from(cards3);
      const [reorderedItem] = items_source.splice(result.source.index, 1);
      items_dest.splice(result.destination.index, 0, reorderedItem);
      updateCards2(items_source);
      updateCards3(items_dest);
    }
    else if(result.source.droppableId === 'cards3' & result.destination.droppableId === 'cards1'){
      const items_source = Array.from(cards3);
      const items_dest = Array.from(cards1);
      const [reorderedItem] = items_source.splice(result.source.index, 1);
      items_dest.splice(result.destination.index, 0, reorderedItem);
      updateCards3(items_source);
      updateCards1(items_dest);
    }
    else if(result.source.droppableId === 'cards3' & result.destination.droppableId === 'cards2'){
      const items_source = Array.from(cards3);
      const items_dest = Array.from(cards2);
      const [reorderedItem] = items_source.splice(result.source.index, 1);
      items_dest.splice(result.destination.index, 0, reorderedItem);
      updateCards3(items_source);
      updateCards2(items_dest);
    }
  };

  return(
    <div className="App">
      <Container>
        <h1 className="name">Weekday.</h1>
        <hr/>

        <Row xs="3">
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="cards1">
              {(provided) => (
                <ul className="list" id="notStarted" {...provided.droppableProps} ref={provided.innerRef}>
                  <h3 className="heading">Not Started 🤷‍♂️</h3>
                  <hr/>
                  {cards1.map(({id, title, content}, index) => {
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

            <Droppable droppableId="cards2">
              {(provided) => (
                <ul className="list" id="inProgress" {...provided.droppableProps} ref={provided.innerRef}>
                  <h3 className="heading">In Progress 🔜</h3>
                  <hr/>
                  {cards2.map(({id, title, content}, index) => {
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

            <Droppable droppableId="cards3">
              {(provided) => (
                <ul className="list" id="completed" {...provided.droppableProps} ref={provided.innerRef}>
                  <h3 className="heading">Completed ✅</h3>
                  <hr/>
                  {cards3.map(({id, title, content}, index) => {
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
        </Row>
      </Container>
    </div>
  );
}

export default App;