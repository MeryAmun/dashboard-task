import React,{ useState } from 'react'
import { Editor } from 'react-draft-wysiwyg';
import './styles.css'


const initialState = {
 taskName: "",
  startDate: "",
  dueDate: "",
  assignedName: "",
  hourlyRate:"",
  estimatedHour:"",
  progress:"",
  tags:"",
  taskDetails: "",
}
// const toolbarOptions = {
//   options: ['inline', 'list'],
//   inline: {
//     options: ['bold', 'italic', 'underline'],
//   },
//   list: { options: ['unordered', 'ordered'] },
// };
const NewTask = () => {
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
        <h3>New Task</h3>
      </div>
      <div className="d-flex justify-content-between align-items-center w-100 my-2">
      <div className="d-flex  mb-1 flex-column justify-content-center align-items-start  w-100" >
        <label className='input_label'>Task name</label>
        <input type="text" placeholder=' Enter Task Name ' name="taskName" value={formData.taskName} className='form_input'
          onChange={handleChange} required />
      </div>
      <div className="d-flex  mb-1 flex-column justify-content-center align-items-start ms-3  w-100" >
        <label className='input_label'>Start Date</label>
        <input type="date"  name="startDate" value={formData.startDate} className='form_input'
          onChange={handleChange} required />
      </div>
      </div>
      <div className="d-flex justify-content-between align-items-center w-100 my-2">
      <div className="d-flex  mb-1 flex-column justify-content-center align-items-start  w-100" >
        <label className='input_label'>Due Date</label>
        <input type="date" name="dueDate" value={formData.dueDate} className='form_input'
          onChange={handleChange} required />
      </div>
      <div className="d-flex  mb-1 flex-column justify-content-center align-items-start ms-3  w-100" >
        <label className='input_label'>Assigned Name</label>
        <input type="text" placeholder=' Enter Assigned To' name="assignedName" value={formData.assignedName} className='form_input'
          onChange={handleChange} required />
      </div>
      </div>
      <div className="d-flex justify-content-between align-items-center w-100 my-2">
      <div className="d-flex  mb-1 flex-column justify-content-center align-items-start  w-100" >
        <label className='input_label'>Hourly Rate</label>
        <input type="text" placeholder='Enter Hourly Rate' name="hourlyRate" value={formData.hourlyRate} className='form_input'
          onChange={handleChange} required />
      </div>
      <div className="d-flex  mb-1 flex-column justify-content-center align-items-start ms-3  w-100" >
        <label className='input_label'>Estimated Hours</label>
        <input type="text" placeholder=' Enter Estimated Hour' name="estimatedHour" value={formData.estimatedHour} className='form_input'
          onChange={handleChange} required />
      </div>
      </div>
      <div className="d-flex justify-content-between align-items-center w-100 my-2">
      <div className="d-flex  mb-1 flex-column justify-content-center align-items-start  w-100" >
        <label className='input_label'>Progress</label>
        <input type="text" placeholder='Enter Progress' name="progress" value={formData.progress} className='form_input'
          onChange={handleChange} required />
      </div>
      <div className="d-flex  mb-1 flex-column justify-content-center align-items-start ms-3  w-100" >
        <label className='input_label'>Estimated Hours</label>
        <input type="text" placeholder=' Enter Tags' name="tags" value={formData.tags} className='form_input'
          onChange={handleChange} required />
      </div>
      </div>
      
      <div className="d-flex  mb-1 flex-column justify-content-center align-items-start  w-100 my-2" >
        <label className='input_label'>Task DEtails</label>
        <Editor
          editorState={formData.taskDetails}
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
          style={{ backgroundColor: "#6366F1" }}>New Task</button>
      </div>
    </div>
  )
}

export default NewTask