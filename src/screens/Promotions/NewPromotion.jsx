import React, { useState } from 'react';
import './styles.css'
import { Editor } from 'react-draft-wysiwyg';

const initialState = {
  employee: "",
  designation: "",
  promotionTitle: "",
  promotionDate: "",
  description: "",
}
// const toolbarOptions = {
//   options: ['inline', 'list'],
//   inline: {
//     options: ['bold', 'italic', 'underline'],
//   },
//   list: { options: ['unordered', 'ordered'] },
// };
const NewPromotion = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value })
  }

  const handleCreatePromotion = () => {
    console.log(formData)
  }


  return (
    <div className='new__promotion'>
      <div className="align-self-start py-3">
        <h3>New Promotion</h3>
      </div>
      <div className="d-flex justify-content-between align-items-center w-100 my-2">
      <div className="d-flex  mb-1 flex-column justify-content-center align-items-start  w-100" >
        <label className='input_label'>Employee</label>
        <select name="employee" value={formData.employee} className='form_input'
          onChange={handleChange} required>
          <option value="employee1">Employee1</option>
          <option value="employee2">Employee2</option>
          <option value="employee3">Employee3</option>
        </select>
      </div>
      <div className="d-flex  mb-1 flex-column justify-content-center align-items-start ms-3  w-100" >
        <label className='input_label'>Designation</label>
        <input type="text" placeholder=' Enter Designation ' name="designation" value={formData.designation} className='form_input'
          onChange={handleChange} required />
      </div>
      </div>
      <div className="d-flex justify-content-between align-items-center w-100 my-2">
      <div className="d-flex  mb-1 flex-column justify-content-center align-items-start  w-100" >
        <label className='input_label'>Promotion Title</label>
        <input type="text" placeholder=' Enter Promotion Title ' name="promotionTitle" value={formData.promotionTitle} className='form_input'
          onChange={handleChange} required />
      </div>
      <div className="d-flex  mb-1 flex-column justify-content-center align-items-start ms-3  w-100" >
        <label className='input_label'>Promotion Date</label>
        <input type="date" placeholder=' Enter Promotion Date ' name="promotionDate" value={formData.promotionDate} className='form_input'
          onChange={handleChange} required />
      </div>
      </div>
      <div className="d-flex  mb-1 flex-column justify-content-center align-items-start  w-100" >
        <label className='input_label'>Description</label>
        <Editor
          editorState={formData.description}
          wrapperClassName="wrapper"
          editorClassName="editor"
          toolbarClassName="toolbar"
          onEditorStateChange={handleChange}
         
        />
        {/* <textarea type="text" placeholder='Enter Description' name="description" value={formData.description} className='form_input'
       onChange={handleChange} required id="" cols="60" rows="10"></textarea> */}
      </div>
      <div className="me-4">
        <button className="btn text-light my-4" type='submit'
          onClick={handleCreatePromotion}
          style={{ backgroundColor: "#6366F1" }}>New Promotion</button>
      </div>
    </div>
  )
}

export default NewPromotion