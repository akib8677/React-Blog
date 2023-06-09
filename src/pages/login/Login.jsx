import './login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
        <div className="loginTitle">LogIn</div>
        <form className="loginForm">
            <label>Email</label>
            <input className='loginInput' type="text" placeholder='Enter your email...' />
            <label>Password</label>
            <input className='loginInput'  type="password" placeholder='Enter your password...' />
            <button className='loginButton'>Login</button>
        </form>
        <button className='loginRegisterButton'>
          <Link className='link' to='/register' >REGISTER</Link>
        </button>
    </div>
  )
}

export default Login