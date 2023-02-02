
import { useState } from 'react';
import './App.css';
import Form from './Form';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';

function App() {
  const [addForm, setAddForm] = useState([{ name: "",mobile:"",address:[{ input: "" }] }])
  
  
  
  const addNewForm = () => {
    setAddForm([...addForm, { name: "",mobile:"",address:[{ input: "" }] }])
  }
  
  const closeForm=(e,index)=>
  {
        let filterForm = addForm.filter((val, i) => {
      return i != index
  })
  setAddForm(filterForm)
  }

  function handleChange(e, index) {
    const temp = [...addForm];
    temp[index] = {
      ...temp[index],
      [e.target.name]: e.target.value,
    };
 
    setAddForm(temp);
  }
  const submitForm=()=>
  {
    console.log(addForm);
  }
  
  return (

    <div className="App">
      
      <h2>Student Registration Form</h2>
      <div >
      
        {
          addForm.map((val, index) => (
            <div className='form'>
            <button className='closeBtn' onClick={(e)=>closeForm(e,index)} disabled={addForm.length==1}><CloseIcon/></button>
              <Form addForm={addForm} setAddForm={setAddForm} index={index} data={val} handleChange={handleChange} />
              <br></br>
            </div>
          ))
        }
        <br />
        <Button onClick={addNewForm} variant="contained" color="secondary">Add Another Form</Button><br/>
        <br /><Button variant="contained" color="success"  onClick={submitForm}>Submit</Button> 
        
</div>
      </div>
      );
}

      export default App;
