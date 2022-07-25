import React from 'react'

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

  return (
    <div>
        {todoData.map((data) => (
            <div key={data.id}>
                <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded">
                    <div className='items-center'>
                        <input
                            type="checkbox"
                            defaultChecked={false}
                            onChange={() => handleCompleteChange(data.id)}
                        />
                        <span className={data.completed ? 'line-through' : undefined}>
                        {data.title}    
                        </span>
                    </div>

                    <div className='items-center'>
                        <button onClick={() => handleClick(data.id)}>X</button>
                    </div>
                    
              </div>
          </div>
          ))}
    </div>
  )
}

export default Lists