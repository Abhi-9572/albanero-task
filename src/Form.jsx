import React, { useState } from "react";

const Form = ({ handleChange, data, index, addForm, setAddForm }) => {

    const [addInput, setAddInput] = useState([{ input: "" }]);

    const handleAdd = (e) => {
        e.preventDefault();
        setAddInput([...addInput, { input: "" }]);
        let addFormArr = addForm;
        addFormArr[index].address = [...addInput, { input: "" }];
        setAddForm(addFormArr);
    };
    const handleDelete = (e, index2) => {
        e.preventDefault();
        let filter = addInput.filter((val, i) => {
            return i != index2;
        });
        setAddInput(filter);
        let addFormArr = addForm;
        let filter2 = addFormArr[index].address.filter((val, i) => {
            return i != index2;
        });
        addFormArr[index].address = filter2;
        setAddForm(addFormArr);
    };
    const addInputValue = (e, index2) => {
        const temp = [...addInput];
        temp[index2].input = e.target.value;
        setAddInput(temp);
        let addFormArr = addForm;
        addFormArr[index].address[index2].input = e.target.value;
        setAddForm(addFormArr);
    };
    return (
        <div>
            <form>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={data.name}
                    onChange={(e) => handleChange(e, index)}
                />
                <label htmlFor="mobile">Mobile No:</label>
                <input
                    type="text"
                    id="mobile"
                    name="mobile"
                    value={data.mobile}
                    onChange={(e) => handleChange(e, index)}
                />
                <br />
                <br />
                {addForm[index].address.map((val, index2) => {
                    return (
                        <div key={index2}>
                            <label for="address">Address {index2 + 1}:</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                onChange={(e) => addInputValue(e, index2)}
                                value={val.input}
                            />
                            <button
                                onClick={(e) => handleDelete(e, index2)}
                                disabled={addInput.length == 1}
                            >
                                Delete
                            </button>
                            <br />
                            {addForm[index].address.length - 1 == index2 && (
                                <button onClick={handleAdd}>Add Address</button>
                            )}
                        </div>
                    );
                })}
                <br />
            </form>
        </div>
    );
};

export default Form;
