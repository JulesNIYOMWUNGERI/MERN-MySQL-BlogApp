import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import image from '../images/development.jpeg'
import { Link } from 'react-router-dom'
import { LogOut } from '../actions/auth'

const Navbar = () => {
  const history = useNavigate()
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('profile'))?.result;

  const handleLogout = () => {
    dispatch(LogOut(history))
  }


  return (
    <div>
        <div className='flex flex-row justify-between py-[10px] items-center'>
            <div>
               <Link to={'/'}><img className='w-70px h-[70px] rounded-[50%]' src={image} alt='/'/></Link>
            </div>
            <div className='flex flex-row items-center gap-4 font-[Poppins,sans-serif] font-[300px]'>
                <Link to='/?cat=art'>
                  <h6>ART</h6>
                </Link>
                <Link to='/?cat=science'>
                  <h6>SCIENCE</h6>
                </Link>
                <Link to='/?cat=technology'>
                  <h6>TECHNOLOGY</h6>
                </Link>
                <Link to='/?cat=cinema'>
                  <h6>CINEMA</h6>
                </Link>
                <Link to='/?cat=design'>
                  <h6>DESIGN</h6>
                </Link>
                <Link to='/?cat=food'>
                  <h6>FOOD</h6>
                </Link>
                <span className='cursor-pointer'>{user?.username}</span>
                {user ? <span onClick={handleLogout} className='cursor-pointer'>logout</span> : <Link to={'/Auth'}>Login</Link>}
                <span className='bg-[#b9e7e7] w-[50px] h-[50px] rounded-[50%] flex justify-center items-center font-[300px] duration-500 hover:text-teal-900 hover:bg-white hover:border'>
                    <Link to="/form">write</Link>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Navbar