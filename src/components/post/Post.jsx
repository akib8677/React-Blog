import './post.css'

const Post = () => {
  return (
    <div className='post'>
      <img 
      className='postImg'
        src="https://cdn.shopify.com/s/files/1/0577/1539/2612/products/2022-12-1012.38.041.jpg?v=1670696017" 
        alt="" 
      />
      <div className='postInfo'>
        <div className='postCats'>
          <span className='postCat'>Music</span>
          <span className='postCat'>Life</span>
        </div>
        <span className='postTitle'>
            Lorem ipsum dolor sit amet.
        </span>
        <hr />
        <span className='postDate'>1 hour ago </span>
      </div>
      <p className='postDesc'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat debitis, eveniet nam eaque eius expedita fugiat? Veritatis neque iusto harum nemo ducimus explicabo, illo at pariatur provident. Saepe, veritatis perferendis.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat debitis, eveniet nam eaque eius expedita fugiat? Veritatis neque iusto harum nemo ducimus explicabo, illo at pariatur provident. Saepe, veritatis perferendis  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat debitis, eveniet nam eaque eius expedita fugiat? Veritatis neque iusto harum nemo ducimus explicabo, illo at pariatur provident. Saepe, veritatis perferendis
      </p>
    </div>
  )
}

export default Post