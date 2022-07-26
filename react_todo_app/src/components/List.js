import React from 'react'

const List = ({
    id, title, completed, todoData, setTodoData, provided, snapshot
}) => {

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

  return (
        <div
            key={id}
            {...provided.draggableProps}
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex items-center justify-between w-full px-4 py-4 my-2 text-gray-600 border rounded`}
        >
                                
            <div className='items-center'>
                <input
                    type="checkbox"
                    defaultChecked={completed}
                    onChange={() => handleCompleteChange(id)}
                    className="mr-2"
                />
                    <span className={completed ? 'line-through' : undefined}>
                        {title}    
                    </span>
            </div>

            <div className='items-center'>
                <button onClick={() => handleClick(id)}>X</button>
            </div>
                                
        </div>
  )
}

export default List