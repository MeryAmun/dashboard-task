import React, { useState } from 'react'
import { Editor } from 'react-draft-wysiwyg';
import './styles.css'


const initialState = {
  accountName: "",
  accountNumber: "",
  initialBalance: "",
 phone: "",
 bankDetails: "",
}
// const toolbarOptions = {
//   options: ['inline', 'list'],
//   inline: {
//     options: ['bold', 'italic', 'underline'],
//   },
//   list: { options: ['unordered', 'ordered'] },
// };
const NewAccount = () => {
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
        <h3>New Bank Account</h3>
      </div>
      <div className="d-flex justify-content-between align-items-center w-100 my-2">
        <div className="d-flex  mb-1 flex-column justify-content-center align-items-start  w-100" >
          <label className='input_label'>Account Name</label>
          <input type="text" placeholder=' Enter Account Name ' name="accountName" value={formData.accountName} className='form_input'
            onChange={handleChange} required />
        </div>
        <div className="d-flex  mb-1 flex-column justify-content-center align-items-start ms-3  w-100" >
          <label className='input_label'>Account Number</label>
          <input type="number" placeholder=' Enter Account Number' name="accountNumber" value={formData.accountNumber} className='form_input'
            onChange={handleChange} required />
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center w-100 my-2">
        <div className="d-flex  mb-1 flex-column justify-content-center align-items-start  w-100" >
          <label className='input_label'>Initial Balance</label>
          <input type="date" name="initialBalance" placeholder=' Enter Initial Balance' value={formData.initialBalance} className='form_input'
            onChange={handleChange} required />
        </div>
        <div className="d-flex  mb-1 flex-column justify-content-center align-items-start ms-3  w-100" >
          <label className='input_label'>Phone</label>
          <input type="text" placeholder=' Enter Phone' name="assignedName" value={formData.assignedName} className='form_input'
            onChange={handleChange} required />
        </div>
      </div>
      

      <div className="d-flex  mb-1 flex-column justify-content-center align-items-start  w-100 my-2" >
        <label className='input_label'>Bank Details</label>
        <Editor
          editorState={formData.bankDetails}
          wrapperClassName="wrapper"
          editorClassName="editor"
          toolbarClassName="toolbar"
          onEditorStateChange={handleChange}

        />
      </div>
      <div className="me-4">
        <button className="btn text-light my-4" type='submit'
          onClick={handleCreatePromotion}
          style={{ backgroundColor: "#6366F1" }}>Create Bank Account</button>
      </div>
    </div>
  )
}

export default NewAccount