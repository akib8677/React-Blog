import './singlePost.css'
import { FaRegEdit } from 'react-icons/fa'
import { RiDeleteBin5Line } from 'react-icons/ri'

const SinglePost = () => {
  return (
    <div className='singlePost'>
        <div className='singlePageWrapper'>
            <img 
                className='singlePostImg'
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                alt="" 
            />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                    <i className='singlePostIcon'><FaRegEdit /></i>
                    <i className='singlePostIcon'><RiDeleteBin5Line /></i>
                </div>
            </h1>
            <div className="singlePageInfo">
                <span className='singlePostAuther'>Auther: <b>Akib</b></span>
                <span className='singlePostDate'>1 hour ago</span>
            </div>
            <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui incidunt accusamus architecto, omnis nesciunt dignissimos vel perferendis obcaecati repellendus minima accusantium placeat recusandae asperiores quam. Magni similique dolorum aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui incidunt accusamus architecto, omnis nesciunt dignissimos vel perferendis obcaecati repellendus minima accusantium placeat recusandae asperiores quam. Magni similique dolorum aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui incidunt accusamus architecto, omnis nesciunt dignissimos vel perferendis obcaecati repellendus minima accusantium placeat recusandae asperiores quam. Magni similique dolorum aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui incidunt accusamus architecto, omnis nesciunt dignissimos vel perferendis obcaecati repellendus minima accusantium placeat recusandae asperiores quam. Magni similique dolorum aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui incidunt accusamus architecto, omnis nesciunt dignissimos vel perferendis obcaecati repellendus minima accusantium placeat recusandae asperiores quam. Magni similique dolorum aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui incidunt accusamus architecto, omnis nesciunt dignissimos vel perferendis obcaecati repellendus minima accusantium placeat recusandae asperiores quam. Magni similique dolorum aliquam.</p>
        </div>
    </div>
  )
}

export default SinglePost