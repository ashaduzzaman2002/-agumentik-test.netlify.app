import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'

const Login = () => {
    const navigate = useNavigate()
    const [input, setInput] = useState({
        username: '',
        password: '',
    })

    const [error, setError] = useState('')

    const handleChange = (e) => {
        const {name, value} = e.target


        setInput({...input, [name]: value})
    }

    const submitHandler = async () => {
        const {data} = await axios.post('http://localhost:5000/api/user/login', input)
        setError(data);
        if(data.success){
            navigate('/admin')
            localStorage.setItem("jwt", data.id);
        }
    }
    

  return (
    <div className='login'>
        <div className='box'>
        <h2>Admin Login</h2>

        <p style={{fontSize: '1.5rem', color: 'red'}}>{error.message}</p>
        <div className='from'>
            <div>
                <h3>Username</h3>
                <input type="text" name='username' onChange={handleChange} value={input.username}  />
            </div>

            <div>
                <h3>Password</h3>
                <input type="password" name='password' onChange={handleChange} value={input.password}/>
            </div>

            <div>
                <input onClick={submitHandler} className='from-btn' type="button" value={'Login'} />
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Login