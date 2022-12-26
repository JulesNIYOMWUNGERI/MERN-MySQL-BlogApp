import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {signUp,signIn} from '../actions/auth'

const Auth = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [flip, setFlip] = useState(true)
  const [inputs, setInputs] = useState({username:"",email:"",password:""})
  const [err,setErr] = useState(null);


  const handleSwitch = () => {
    setFlip(!flip)
  }


  const handleChange = (e) => {
    setInputs({...inputs,[e.target.name]:e.target.value})
  }


  const handleSubmit = async(e) => {
    e.preventDefault();
    if(flip){
      const response = await dispatch(signIn(inputs,history))
      setErr(response)
    }else{
      const response = await dispatch(signUp(inputs,setFlip,setInputs))
      setErr(response)
    }
  }

  return (
    <div className='flex flex-col justify-center items-center h-[100vh] bg-[#b9e7e7] gap-5'>
      <div className='flex flex-col justify-center items-center bg-white p-[30px] gap-[10px]'>
        <h1 className='text-[25px] text-teal-900 font-[900]'>{ flip ? "SIGN IN":"SIGN UP"}</h1>
        <form className='flex flex-col gap-5'>  
          <input required className='p-[10px] border-b border-b-teal-900 bg-transparent' value={inputs.username} type="text" name='username' placeholder="UserName*" onChange={handleChange}/>
          {!flip && 
            <input required className='p-[10px] border-b border-b-teal-900 bg-transparent' value={inputs.email} type="Email" name='email' placeholder="Email*" onChange={handleChange}/>
          }
          <input required className='p-[10px] border-b border-b-teal-900 bg-transparent' value={inputs.password} type="password" name='password' placeholder="Password*" onChange={handleChange}/>
          <button onClick={handleSubmit} className='bg-teal-900 py-[10px] px-[10px]'>{flip ? "SIGN IN":"SIGN UP"}</button>
          {err && <p className='text-red-600 flex justify-center items-center'>{err}</p>}
        </form>
        <button onClick={handleSwitch} className='border'>{flip ? "DON'T HAVE AN ACCOUNT SIGN UP":"ALREADY HAVE AN ACCOUNT SIGN IN" }</button>
      </div>
    </div>
  )
}

export default Auth