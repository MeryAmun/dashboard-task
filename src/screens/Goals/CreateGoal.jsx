import React, { useState } from 'react'
import { Editor } from 'react-draft-wysiwyg';
import './styles.css'


const initialState = {
  subject: "",
  goalType: "",
  startDate: "",
  dueDate: "",
  goalDetails: ""
}
// const toolbarOptions = {
//   options: ['inline', 'list'],
//   inline: {
//     options: ['bold', 'italic', 'underline'],
//   },
//   list: { options: ['unordered', 'ordered'] },
// }
const CreateGoal = () => {
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
        <h3>New Project</h3>
      </div>
      <div className="d-flex justify-content-between align-items-center w-100 my-2">
        <div className="d-flex  mb-1 flex-column justify-content-center align-items-start  w-100" >
          <label className='input_label'>Subject</label>
          <input type="text" placeholder=' Enter goal Subject ' name="subject" value={formData.subject} className='form_input'
            onChange={handleChange} required />
        </div>

        <div className="d-flex  mb-1 flex-column justify-content-center align-items-start ms-3  w-100" >
          <label className='input_label'>Goal Type</label>
          <input type="text" placeholder=' Enter Goal Type' name="goalType" value={formData.goalType} className='form_input'
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

      <div className="d-flex  mb-1 flex-column justify-content-center align-items-start  w-100 my-2" >
        <label className='input_label'>Goal Details</label>
        <Editor
          editorState={formData.goalDetails}
          wrapperClassName="wrapper"
          editorClassName="editor"
          toolbarClassName="toolbar"
          onEditorStateChange={handleChange}

        />

      </div>
      <div className="me-4">
        <button className="btn text-light my-4" type='submit'
          onClick={handleCreatePromotion}
          style={{ backgroundColor: "#6366F1" }}>New Goal</button>
      </div>
    </div>
  )
}

export default CreateGoal