import React, { useState } from 'react'

const List = React.memo(({
    id, title, completed, todoData, setTodoData, provided, snapshot, handleClick
}) => {

    const [isEditing, setIsEditing] = useState(false);
    const [editiedTitle, setEditiedTitle] = useState(title);

    

    const handleCompleteChange = (id) => {
        let newTodoData = todoData.map(data => {
          if(data.id === id) {
            data.completed = !data.completed;
          }
          return data;
        })
    
        setTodoData(newTodoData);

        localStorage.setItem('todoData', JSON.stringify(newTodoData));
    }

    const handelEditChange = (e) => {
        setEditiedTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let newTodoData = todoData.map(data => {
            if(data.id === id) {
                data.title = editiedTitle
            }
            return data;
        })
        setTodoData(newTodoData);
        setIsEditing(false);

        localStorage.setItem('todoData', JSON.stringify(newTodoData));
    }

    if(isEditing) {
        return(
            <div className="flex items-center justify-between w-full px-4 py-4 my-2 text-gray-600 bg-gray-100 border rounded">
                <div className='items-center'>
                    <form
                        onSubmit={handleSubmit}
                    >
                        <input
                            value={editiedTitle}
                            onChange={handelEditChange}
                            className="w-full px-3 py-2 mr-4 text-gray-500 rounded"
                        />
                    </form>
                </div>
      
                  <div className='items-center'>
                      <button
                          className="px-4 py-2"
                          type="submit"
                          onClick={handleSubmit}
                      >
                          ✔️
                      </button>
      
                      <button
                          className="px-4 py-2"
                          onClick={() => setIsEditing(false)}
                      >
                          ⤵️
                      </button>
                  </div>
                                      
              </div>
        )
    } else {
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
                      <button
                          className="px-4 py-2"
                          onClick={() => setIsEditing(true)}
                      >
                          ✏️
                      </button>
      
                      <button
                          className="px-4 py-2"
                          onClick={() => handleClick(id)}
                      >
                          ❌
                      </button>
                  </div>
                                      
              </div>
        )
    }

})

export default List