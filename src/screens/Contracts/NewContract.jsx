import React, { useState } from 'react'
import { Editor } from 'react-draft-wysiwyg';
import './styles.css'


const initialState = {
  subject: "",
  startDate: "",
  dueDate: "",
  clientName: "",
  contractValue: "",
  visibleToClient: "",
}
// const toolbarOptions = {
//   options: ['inline', 'list'],
//   inline: {
//     options: ['bold', 'italic', 'underline'],
//   },
//   list: { options: ['unordered', 'ordered'] },
// };
const NewContract = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value })
  }

  const handleCreatePromotion = () => {
    console.log(formData)
  }
  return (
    <div className='new__task'>
      <div className="align-self-start py-3">
        <h3>New Contract</h3>
      </div>
      <div className="d-flex justify-content-between align-items-center w-100 my-2">
        <div className="d-flex  mb-1 flex-column justify-content-center align-items-start  w-100" >
          <label className='input_label'>Subject</label>
          <input type="text" placeholder=' Enter Subject ' name="subject" value={formData.subject} className='form_input'
            onChange={handleChange} required />
        </div>
        <div className="d-flex  mb-1 flex-column justify-content-center align-items-start ms-3  w-100" >
          <label className='input_label'>Client Name</label>
          <input type="text" placeholder=' Enter Client Name' name="clientName" value={formData.clientName} className='form_input'
            onChange={handleChange} required />
        </div>

      </div>
      <div className="d-flex justify-content-between align-items-center w-100 my-2">
      <div className="d-flex  mb-1 flex-column justify-content-center align-items-start  w-100" >
          <label className='input_label'>Start Date</label>
          <input type="date" name="startDate" value={formData.startDate} className='form_input'
            onChange={handleChange} required />
        </div>
        <div className="d-flex  mb-1 flex-column justify-content-center align-items-start ms-3 w-100" >
          <label className='input_label'>End Date</label>
          <input type="date" name="dueDate" value={formData.dueDate} className='form_input'
            onChange={handleChange} required />
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center w-100 my-2">
        <div className="d-flex  mb-1 flex-column justify-content-center align-items-start  w-100" >
          <label className='input_label'>Contract Value</label>
          <input type="number" placeholder='Enter Contract Value' name="contractValue" value={formData.contractValue} className='form_input'
            onChange={handleChange} required />
        </div>
        <div className="d-flex  mb-1 flex-column justify-content-center align-items-start ms-3  w-100" >
          <label className='input_label'>Visible To client</label>
          <input type="text" placeholder=' EnterVisible To client' name="visibleToClient" value={formData.visibleToClient} className='form_input'
            onChange={handleChange} required />
        </div>
      </div>
  
      <div className="d-flex  mb-1 flex-column justify-content-center align-items-start  w-100 my-2" >
        <label className='input_label'>Description</label>
        <Editor
          editorState={formData.description}
          wrapperClassName="wrapper"
          editorClassName="editor"
          toolbarClassName="toolbar"
          onEditorStateChange={handleChange}

        />
      </div>
      <div className="me-4">
        <button className="btn text-light my-4" type='submit'
          onClick={handleCreatePromotion}
          style={{ backgroundColor: "#6366F1" }}>New Contract</button>
      </div>
    </div>
  )
}

export default NewContract