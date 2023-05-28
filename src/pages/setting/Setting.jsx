import Sidebar from '../../components/sidebar/Sidebar'
import './setting.css'
import {FaRegUserCircle} from 'react-icons/fa'

const Setting = () => {
  return (
    <div className='setting'>
      <div className="settingsWrapper">
        <div className="settingTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className='settingForm'>
          <label>Profile Picture</label>
          <div className="settingPP">
            <img 
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
              alt="" 
              />
            <label htmlFor="fileInput">
              <i className='settingPPIcon'><FaRegUserCircle/></i>
            </label>
            <input type="file" id='fileInput' style={{display: 'none'}} />
          </div>
          <label>Username</label>
          <input type="text" placeholder='Safak' />
          <label>Email</label>
          <input type="email" placeholder='safak@gmail.com' />
          <label>Password</label>
          <input type="password" />
          <button className='settingsSubmit'>Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}

export default Setting