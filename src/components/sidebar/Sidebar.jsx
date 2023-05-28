import './sidebar.css'
import { AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai'
import { BsPinterest, BsInstagram } from 'react-icons/bs'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img
          src="https://cdn.shopify.com/s/files/1/0577/1539/2612/products/2022-12-1012.38.041.jpg?v=1670696017"
          alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Reprehenderit dolorum, facilis dicta obcaecati perspiciatis incidunt earum labore blanditiis omnis error!
        </p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          <li className='sibarListItem'>Life</li>
          <li className='sibarListItem'>Music</li>
          <li className='sibarListItem'>Style</li>
          <li className='sibarListItem'>Sport</li>
          <li className='sibarListItem'>Tech</li>
          <li className='sibarListItem'>Cinema</li>
        </ul>
      </div>

      <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW US</span>
        <div className='sidebarSocial'>
            <i className='sidebarIcon'><AiFillFacebook /></i>
            <i className='sidebarIcon'><AiFillTwitterSquare /></i>
            <i className='sidebarIcon'><BsPinterest /></i>
            <i className='sidebarIcon'><BsInstagram /></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar