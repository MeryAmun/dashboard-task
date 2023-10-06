import React,{ useState } from 'react';
import './styles.css'
import { profileAvatar } from '../../assets/index'
import { TiPlus } from 'react-icons/ti'
import { FaQuestionCircle} from 'react-icons/fa'

const initialState = {
fullName:"",
employmentId:"",
username:"",
password:"",
confirmPassword:"",
email:"",
locale:"",
phone:"",
mobile:"",
skypeId:"",
profilePhoto:"",
selectWarehouse:"",
userType:"",
direction:"",
permission:""
}
const CreateUser = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
const value = e.target.value;
setFormData({...formData, [e.target.name]:value})
  }

const handleCreateUser = () => {
  console.log(formData)
}

const createWarehouse = () =>{
  alert("create new warehouse")
}
  return (
    <div className='create__user' >
      <div className="d-flex  my-1 justify-content-between align-items-center  w-50" >
        <label className='input_label'>Full Name<sup style={{color:"red"}}>*</sup></label>
       <input type="text" placeholder='e.g Enter Your Full Name' name="fullName" value={formData.fullName} className='form_input'
       onChange={handleChange} required/>
      </div>
      <div className="d-flex  my-1 justify-content-between align-items-center  w-50">
        <label className='input_label'>Employment ID</label>
       <input type="text" placeholder='e.g 15425' name="employmentId" value={formData.employmentId} className='form_input'
       onChange={handleChange} required/>
      </div>
      <div className="d-flex  my-1 justify-content-between align-items-center  w-50">
        <label className='input_label'>Username<sup style={{color:"red"}}>*</sup></label>
       <input type="text" placeholder='e.g Enter Your Username' name="username" value={formData.username} className='form_input'
       onChange={handleChange} required/>
      </div>
      <div className="d-flex  my-1 justify-content-between align-items-center  w-50">
        <label className='input_label'>Password<sup style={{color:"red"}}>*</sup></label>
       <input type="text" placeholder='e.g Enter Your Password' name="password" value={formData.password} className='form_input'
       onChange={handleChange} required/>
      </div>
      <div className="d-flex  my-1 justify-content-between align-items-center  w-50">
        <label className='input_label'>Confirm Password<sup style={{color:"red"}}>*</sup></label>
       <input type="text" placeholder='e.g Confirm Password' name="confirmPassword" value={formData.confirmPassword} className='form_input'
       onChange={handleChange} required/>
      </div>
      <div className="d-flex  my-1 justify-content-between align-items-center  w-50">
        <label className='input_label'>Email<sup style={{color:"red"}}>*</sup></label>
       <input type="text" placeholder='e.g Enter Your Email' name="email" value={formData.email} className='form_input'
       onChange={handleChange} required/>
      </div>
      <div className="d-flex  my-1 justify-content-between align-items-center  w-50">
        <label className='input_label'>Locale</label>
        <select name="" id="" className='form_input'
        onChange={handleChange} required>
          <option value="cameroon">Cameroon</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="India">India</option>
        </select>
      </div>
      <div className="d-flex  my-1 justify-content-between align-items-center  w-50">
        <label className='input_label'>Language</label>
       <input type="text" placeholder='e.g Enter Your Language' name="language" value={formData.language} className='form_input'
       onChange={handleChange} required/>
      </div>
      <div className="d-flex  my-1 justify-content-between align-items-center  w-50">
        <label className='input_label'>phone</label>
       <input type="text" placeholder='e.g Enter Your Phone Number' name="phone" value={formData.phone} className='form_input'
       onChange={handleChange} required/>
      </div>
      <div className="d-flex  my-1 justify-content-between align-items-center  w-50">
        <label className='input_label'>mobile</label>
       <input type="text" placeholder='e.g Enter Your mobile' name="mobile" value={formData.mobile} className='form_input'
       onChange={handleChange} required/>
      </div>
      <div className="d-flex  my-1 justify-content-between align-items-center  w-50">
        <label className='input_label'>Skype Id</label>
       <input type="text" placeholder='e.g Enter Your Skype Id' name="skypeId" value={formData.skypeId} className='form_input'
       onChange={handleChange} required/>
      </div>
      <div className="d-flex  my-1 justify-content-start align-items-center  w-50">
        <label className='photo_label'>Profile Photo<sup style={{color:"red"}}>*</sup></label>
        <div className="d-flex flex-column justify-content-start align-items-center w-50">
          <img src={profileAvatar} alt="user"  height="200px" width="200px" className='' style={{border:"2px solid  #DCE5E7", alignSelf:"flex-start"}}/>
        <input type="file" name="profilePhoto" value={formData.profilePhoto} className='form_input mt-2'
       onChange={handleChange} required/>
        </div>
      </div>
      <div className="d-flex  my-1 justify-content-between align-items-center  w-50">
        <label className='input_label'>Select Warehouse<sup style={{color:"red"}}>*</sup></label>
       <div className="d-flex  my-1 justify-content-between align-items-center  w-100">
       <select name="Select Warehouse" value={formData.selectWarehouse} className='form_input'
       onChange={handleChange} required>
          <option value="cameroon">--Select--</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="India">India</option>
        </select>
        <button className='createWarehouse_btn' onClick={createWarehouse}>
          <TiPlus size={20} color="rgb(59, 130, 246)"/>
        </button>
       </div>
      </div>
      <div className="d-flex  my-1 justify-content-between align-items-center  w-50">
        <label className='input_label'>User Type<sup style={{color:"red"}}>*</sup></label>
       <select name="userType" value={formData.userType} className='form_input'
        onChange={handleChange} required>
          <option value="">Select User Type</option>
          <option value="admin">Admin</option>
          <option value="staff">Staff</option>
          <option value="client">Client</option>
        </select>
      </div>
      <div className="d-flex  my-1 justify-content-between align-items-center  w-50">
        <label className='input_label'>Direction</label>
       <select name="direction" value={formData.direction} className='form_input'
        onChange={handleChange} required>
          <option value="">Select Direction</option>
          <option value="rtl">RTL</option>
          <option value="ltr">LTR</option>
        </select>
      </div>
      <div className="d-flex  my-1 justify-content-start align-items-start  w-50">
        <label htmlFor="permission" className='permissionInput_label'>Permission</label>
        <div className="d-flex flex-column justify-content-start align-items-start w-100">
          <div className="d-flex justify-content-start align-items-center w-100">
            <input type="radio" id="everyone" name="permission" value={formData.permission} className='me-3'
       onChange={handleChange} required checked/>
       <div className="d-flex justify-content-start align-items-center w-100">
              <label for="everyone">Everyone <sup><FaQuestionCircle size={15} color="gray"/></sup></label>
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-center w-100">
            <input type="radio" id="custom" name="permission" value={formData.permission} className='me-3'
       onChange={handleChange} required/>
       <div className="d-flex justify-content-start align-items-center w-100">
              <label for="custom" className='w-100'>Customize Permission <sup><FaQuestionCircle size={15} color="gray"/></sup></label>
              
            </div>
          </div>
        </div>
      </div>
      <div className="align-self-end me-4">
        <button className="btn text-light" type='submit' 
        onClick={handleCreateUser}
        style={{backgroundColor:"#1797BE"}}>Create User</button>
      </div>
    </div>
  )
}

export default CreateUser