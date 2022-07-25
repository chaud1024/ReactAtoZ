import React from 'react'

const Form = ({ value, setValue, handleSubmit }) => {

    const handleChange = (e) => { // get an event
        // console.log('e', e.target.value) 
        setValue(e.target.value);
    }

  return (
    <div>
        <form
            style={{ display : "flex" }}
            onSubmit={handleSubmit}
        >
            <input
              type="text"
              name="value"
              style={{ flex: '10', padding: '5px'}}
              placeholder="해야 할 일을 입력하세요."
              value={value} // the value which in the state above
              onChange={handleChange}
            />
            <input
              type="submit"
              value="입력"
              className="btn"
              style={{ flex: '1'}}

            />
        </form>
    </div>
  )
}

export default Form