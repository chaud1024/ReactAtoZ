import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Lists = ({ todoData, setTodoData }) => {


    const handleClick = (id) => { // data.id to the parameter(which I clicked THAT id)
        let newTodoData = todoData.filter(data => data.id !== id); // (id: THAT id what I clicked)
        setTodoData(newTodoData);
    }

    const handleCompleteChange = (id) => {
        let newTodoData = todoData.map(data => {
          if(data.id === id) {
            data.completed = !data.completed;
          }
          return data;
        })
    
        setTodoData(newTodoData);
    }

    const handleEnd = (result) => {
        // parameter result has drag event  information such as source and destination, etc.
        // console.log('result', result);
        // if it doesn't have a destination, it will end the function

        if(!result.destination) return;

        // to keep react consistency, create new todoData
        const newTodoData = todoData;

        //1. remove the item that will be changed from the array
        //2. take that removed item value will go to the return value
        const [reorderedItem] = newTodoData.splice(result.source.index, 1);
        // result.source.index : it's original index

        // insert the reorderedItem where you want to put it
        newTodoData.splice(result.destination.index, 0, reorderedItem);
        
        setTodoData(newTodoData);
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
                                <div
                                    key={data.id}
                                    {...provided.draggableProps}
                                    ref={provided.innerRef}
                                    {...provided.dragHandleProps}
                                    className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex items-center justify-between w-full px-4 py-4 my-2 text-gray-600 border rounded`}
                                >
                                
                                    <div className='items-center'>
                                        <input
                                            type="checkbox"
                                            defaultChecked={false}
                                            onChange={() => handleCompleteChange(data.id)}
                                            className="mr-2"
                                        />
                                        <span className={data.completed ? 'line-through' : undefined}>
                                        {data.title}    
                                        </span>
                                    </div>

                                    <div className='items-center'>
                                        <button onClick={() => handleClick(data.id)}>X</button>
                                    </div>
                                
                                </div>
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
}

export default Lists