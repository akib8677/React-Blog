import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'
import { Navigate } from 'react-router-dom'

const Home = () => {
  const user = true

  if (!user) {
    return <Navigate to="/register" replace />;
  }

  return (
    <>
      <Header />
      <div className='home'>
        <Posts />
        <Sidebar />
      </div>
    </>
  )
}

export default Home