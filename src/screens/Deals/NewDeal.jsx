import React,{ useState } from 'react'
import { Editor } from 'react-draft-wysiwyg';
import './styles.css'


const initialState = {
 title: "",
dealValue:"",
  source: "",
  closeDate: "",
  goalDetails:"",
  pipeline: "",
  clientNAme:"",
  dealOwner:"",
  assign:""
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
      <h3>New Deal</h3>
    </div>
    <div className="d-flex justify-content-between align-items-center w-100 my-2">
    <div className="d-flex  mb-1 flex-column justify-content-center align-items-start  w-100" >
      <label className='input_label'>Title</label>
      <input type="text" placeholder=' Enter Deal Title ' name="title" value={formData.title} className='form_input'
        onChange={handleChange} required />
    </div>

    <div className="d-flex  mb-1 flex-column justify-content-center align-items-start ms-3  w-100" >
      <label className='input_label'>Deal value</label>
      <input type="text" placeholder=' Enter Deal value' name="goalType" value={formData.goalType} className='form_input'
        onChange={handleChange} required />
    </div>
    </div>
   
    <div className="d-flex justify-content-between align-items-center w-100 my-2">
    <div className="d-flex  mb-1 flex-column justify-content-center align-items-start  w-100" >
      <label className='input_label'>Source</label>
      <input type="text"  name="source" placeholder=' Enter Source' value={formData.source} className='form_input'
        onChange={handleChange} required />
    </div>
    <div className="d-flex  mb-1 flex-column justify-content-center align-items-start ms-3 w-100" >
      <label className='input_label'>End Date</label>
      <input type="date" name="closeDate" value={formData.closeDate} className='form_input'
        onChange={handleChange} required />
    </div>
    </div>
    <div className="d-flex justify-content-between align-items-center w-100 my-2">
    <div className="d-flex  mb-1 flex-column justify-content-center align-items-start  w-100" >
      <label className='input_label'>Pipeline</label>
      <input type="text" placeholder=' Enter Deal Pipeline ' name="pipeline" value={formData.pipeline} className='form_input'
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
      <label className='input_label'>Deal Owner</label>
      <input type="text" placeholder=' Enter Deal Owner ' name="dealOwner" value={formData.dealOwner} className='form_input'
        onChange={handleChange} required />
    </div>

    <div className="d-flex  mb-1 flex-column justify-content-center align-items-start ms-3  w-100" >
      <label className='input_label'>Assign</label>
      <input type="text" placeholder=' Enter Assign' name="assign" value={formData.assign} className='form_input'
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
        style={{ backgroundColor: "#6366F1" }}>New Deal</button>
    </div>
  </div>
  )
}

export default CreateGoal