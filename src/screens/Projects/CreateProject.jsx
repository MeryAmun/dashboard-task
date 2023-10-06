import React,{ useState } from 'react'
import { Editor } from 'react-draft-wysiwyg';
import './styles.css'


const initialState = {
 projectName: "",
 projectCategory:"",
 projectClient:"",
 progress:"",
  startDate: "",
  dueDate: "",
  billingType: "",
  fixedPrice:"",
  hourlyRate:"",
  estimatedHour:"",
  status:"",
  demoUrl:"",
  projectDetails:""
}
// const toolbarOptions = {
//   options: ['inline', 'list'],
//   inline: {
//     options: ['bold', 'italic', 'underline'],
//   },
//   list: { options: ['unordered', 'ordered'] },
// }
const CreateProject = () => {
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
      <label className='input_label'>Project Name</label>
      <input type="text" placeholder=' Enter Project Name ' name="projectName" value={formData.projectName} className='form_input'
        onChange={handleChange} required />
    </div>

    <div className="d-flex  mb-1 flex-column justify-content-center align-items-start ms-3  w-100" >
      <label className='input_label'>Project Category</label>
      <input type="text" placeholder=' Enter Project Category' name="projectCategory" value={formData.projectCategory} className='form_input'
        onChange={handleChange} required />
    </div>
    </div>
    <div className="d-flex justify-content-between align-items-center w-100 my-2">
    <div className="d-flex  mb-1 flex-column justify-content-center align-items-start  w-100" >
      <label className='input_label'>Project Client</label>
      <input type="text" placeholder=' Enter Project Client' name="projectClient" value={formData.projectClient} className='form_input'
        onChange={handleChange} required />
    </div>
    <div className="d-flex  mb-1 flex-column justify-content-center align-items-start ms-3  w-100" >
      <label className='input_label'>Progress</label>
      <input type="text" placeholder='Enter Progress' name="progress" value={formData.progress} className='form_input'
        onChange={handleChange} required />
    </div>
    </div>
    <div className="d-flex justify-content-between align-items-center w-100 my-2">
    <div className="d-flex  mb-1 flex-column justify-content-center align-items-start  w-100" >
      <label className='input_label'>Start Date</label>
      <input type="date"  name="startDate" value={formData.startDate} className='form_input'
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
      <label className='input_label'>Billing Type</label>
      <input type="text" placeholder='Enter Billing Type' name="billingType" value={formData.billingType} className='form_input'
        onChange={handleChange} required />
    </div>
    <div className="d-flex  mb-1 flex-column justify-content-center align-items-start ms-3  w-100" >
      <label className='input_label'>Fixed Price</label>
      <input type="text" placeholder=' Enter Fixed Price' name="tags" value={formData.fixedPrice} className='form_input'
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
      <label className='input_label'>Status</label>
      <input type="text" placeholder='Enter Status' name="status" value={formData.status} className='form_input'
        onChange={handleChange} required />
    </div>
    <div className="d-flex  mb-1 flex-column justify-content-center align-items-start ms-3  w-100" >
      <label className='input_label'>Demo URL</label>
      <input type="text" placeholder=' Enter Demo URL' name="demoUrl" value={formData.demoUrl} className='form_input'
        onChange={handleChange} required />
    </div>
    </div>
    
    <div className="d-flex  mb-1 flex-column justify-content-center align-items-start  w-100 my-2" >
      <label className='input_label'>Project Details</label>
      <Editor
        editorState={formData.projectDetails}
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
        style={{ backgroundColor: "#6366F1" }}>New Project</button>
    </div>
  </div>
  )
}

export default CreateProject