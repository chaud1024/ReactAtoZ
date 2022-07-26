import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import List from './List';

const Lists = React.memo(({ todoData, setTodoData, handleClick }) => {

    const handleEnd = (result) => {
        // parameter result has drag event  information such as source and destination, etc.
        // console.log('result', result);
        // if it doesn't have a destination, it will end the function

        if(!result.destination) return;

        // to keep react immutability, create new todoData
        const newTodoData = todoData;

        //1. remove the item that will be changed from the array
        //2. take that removed item value will go to the return value
        const [reorderedItem] = newTodoData.splice(result.source.index, 1);
        // result.source.index : it's original index

        // insert the reorderedItem where you want to put it
        newTodoData.splice(result.destination.index, 0, reorderedItem);

        setTodoData(newTodoData);

        localStorage.setItem('todoData', JSON.stringify(newTodoData));
    }

  return (
    <div>

        <DragDropContext onDragEnd={handleEnd}>
            <Droppable droppableId='todo'>
            {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                    {todoData.map((data, index) => (
                        <Draggable
                            key={data.id}
                            draggableId={data.id.toString()}
                            index={index}
                        >
                            {(provided, snapshot) => (
                                <List
                                    key={data.id}
                                    id={data.id}
                                    title={data.title}
                                    completed={data.completed}
                                    todoData={todoData}
                                    setTodoData={setTodoData}
                                    provided={provided}
                                    snapshot={snapshot}
                                    handleClick={handleClick}
                                />
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </div>
            )}
            </Droppable>
          </DragDropContext>
    </div>
  )
})

export default Lists