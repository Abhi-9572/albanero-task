import React, { useState } from 'react'


const Form = ({ handleChange, data, index,addForm,setAddForm }) => {
    // console.log(index);
    // console.log(addForm[index].address)
//addForm[index].address
    const [addInput, setAddInput] = useState([{ input: "" }])
    const handleAdd = (e) => {
        e.preventDefault();
        setAddInput([...addInput, { input: "" }])
        setAddForm([...addForm,])
    }
    const handleDelete = (e, index) => {

        e.preventDefault()

        let filter = addInput.filter((val, i) => {
            return i != index
        })
        setAddInput(filter)

    }
    console.log(addInput)
    const addInputValue = (e, index) => {
        const temp = [...addInput]
        temp[index].input = e.target.value;
        setAddInput(temp);
    }
    return (
        <div >

            <form >
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={data.name} onChange={(e) => handleChange(e, index)} />
                <label htmlFor="mobile">Mobile No:</label>
                <input type="text" id="mobile" name="mobile" value={data.mobile} onChange={(e) => handleChange(e, index)} /><br /><br />
                {
                   addInput.map((val, index) =>
                    (
                        
                        <div key={index}>
                            <label for="address">Address {index + 1}:</label>
                            <input type="text" id="address" name="address" onChange={(e) => addInputValue(e, index)} value={val.input} />
                            <button onClick={(e) => handleDelete(e, index)} disabled={addInput.length == 1}>Delete</button><br />
                            {
                                addInput.length - 1 == index && <button onClick={handleAdd}>Add Address</button>
                            }
                        </div>
                    ))
                }
                <br />
            </form>
        </div>
    )
}

export default Form
