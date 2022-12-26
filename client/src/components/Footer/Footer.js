import React from 'react'
import image from '../images/development.jpeg'

const Footer = () => {
  return (
    <footer className='mt-[100px] p-[20px] bg-[#b9e7e7] flex items-center justify-between text-[15px]'>
        <img className='w-[150px] h-[100px]' src={image} alt="icon"/>
        <span>Made with me and <b>React.js</b>.</span>
    </footer>
  )
}

export default Footer