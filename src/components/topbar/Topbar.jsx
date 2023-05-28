import './topbar.css'
import { AiFillFacebook, AiFillTwitterSquare, AiOutlineSearch } from 'react-icons/ai'
import { BsPinterest, BsInstagram } from 'react-icons/bs'
import { Link, Outlet } from 'react-router-dom'

const Topbar = () => {
  const user = true

  return (
    <>
      <div className='topbar'>
        <div className='topLeft'>
          <i className='topIcon'><AiFillFacebook /></i>
          <i className='topIcon'><AiFillTwitterSquare /></i>
          <i className='topIcon'><BsPinterest /></i>
          <i className='topIcon'><BsInstagram /></i>
        </div>
        <div className='topCenter'>
          <ul className='topList'>
            <li className='topListItem'>
              <Link className='link' to='/'>HOME</Link>
            </li>
            <li className='topListItem'>
              <Link className='link' to='/about'>ABOUT</Link>
            </li>
            <li className='topListItem'>
              <Link className='link' to='/contact'>CONTACT</Link>
            </li>
            <li className='topListItem'>
              <Link className='link' to='/write'>WRITE</Link>
            </li>
            <li className='topListItem'>
              <Link className='link' >{user && 'LOGOUT'}</Link>
            </li>
          </ul>
        </div>
        {
          user ? (
            <div className='topRight'>
              <Link to='/setting'>
                <img className='topImg' 
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQmcqzN9KSMx-hxPJfiB3yt59uQhN9R4IqjisfUEitJv9lbQVN14QYLsUfmgiH-AoH2VgTFMdRBaTWa9XXpU9aMV1fveYnRgRsf4peaqt_rCR_qyQ483NgjHHdhfYpOr8axyGWhk3DHw5lAUQkXl6NGMugPS7k6Apw7CUjqRMgwAv01i2_AXyRumuBfw/w1200-h630-p-k-no-nu/blank-profile-picture-hd-images-photo.JPG" 
                  alt="profile" 
                />
              </Link>
              <i className='topSearchIcon'><AiOutlineSearch /></i>
            </div>
          ) : (
            <ul className='topList'>
              <li className='topListItem'>
                <Link className='link' to='/login'>LOGIN</Link>
              </li>
              <li className='topListItem'>
                <Link className='link' to='/register'>REGISTER</Link>
              </li>
            </ul>
          )
        }

      </div>
      <Outlet />
    </>
  )
}

export default Topbar