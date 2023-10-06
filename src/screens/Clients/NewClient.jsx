import React, { useState } from 'react'
import { Editor } from 'react-draft-wysiwyg';
import './styles.css'


const initialState = {
  companyName: "",
  companyEmail: "",
  companyVat: "",
  customerGroup: "",
  language: "",
  currency: "",
  shortNote: ""
}
// const toolbarOptions = {
//   options: ['inline', 'list'],
//   inline: {
//     options: ['bold', 'italic', 'underline'],
//   },
//   list: { options: ['unordered', 'ordered'] },
// };
const NewClient = () => {
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
        <h3>New Client</h3>
      </div>
      <div className="d-flex justify-content-between align-items-center w-100 my-2">
        <div className="d-flex  mb-1 flex-column justify-content-center align-items-start  w-100" >
          <label className='input_label'>Company Name</label>
          <input type="text" placeholder=' Enter Company Name' name="companyName" value={formData.companyName} className='form_input'
            onChange={handleChange} required />
        </div>
        <div className="d-flex  mb-1 flex-column justify-content-center align-items-start ms-3  w-100" >
          <label className='input_label'>Company Email</label>
          <input type="email" placeholder=' Enter Company Email' name="companyEmail" value={formData.companyEmail} className='form_input'
            onChange={handleChange} required />
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center w-100 my-2">
        <div className="d-flex  mb-1 flex-column justify-content-center align-items-start  w-100" >
          <label className='input_label'>Due Date</label>
          <input type="text" placeholder=' Enter Company VAT' name="companyVat" value={formData.companyVat} className='form_input'
            onChange={handleChange} required />
        </div>
        <div className="d-flex  mb-1 flex-column justify-content-center align-items-start ms-3  w-100" >
          <label className='input_label'>Customer Group</label>
          <input type="text" placeholder=' Enter Customer Group' name="customerGroup" value={formData.customerGroup} className='form_input'
            onChange={handleChange} required />
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center w-100 my-2">
        <div className="d-flex  mb-1 flex-column justify-content-center align-items-start  w-100" >
          <label className='input_label'>Language</label>
          <input type="text" placeholder='Enter Language' name="language" value={formData.language} className='form_input'
            onChange={handleChange} required />
        </div>
        <div className="d-flex  mb-1 flex-column justify-content-center align-items-start ms-3  w-100" >
          <label className='input_label'>Currency</label>
          <input type="text" placeholder=' Enter Currency' name="currency" value={formData.currency} className='form_input'
            onChange={handleChange} required />
        </div>
      </div>

      <div className="d-flex  mb-1 flex-column justify-content-center align-items-start  w-100 my-2" >
        <label className='input_label'>Short Note</label>
        <Editor
          editorState={formData.shortNote}
          wrapperClassName="wrapper"
          editorClassName="editor"
          toolbarClassName="toolbar"
          onEditorStateChange={handleChange}

        />
      </div>
      <div className="me-4">
        <button className="btn text-light my-4" type='submit'
          onClick={handleCreatePromotion}
          style={{ backgroundColor: "#6366F1" }}>New Client</button>
      </div>
    </div>
  )
}

export default NewClient