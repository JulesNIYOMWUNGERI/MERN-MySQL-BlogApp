import React from 'react'
import { Link } from 'react-router-dom'


const Post = ({post}) => {



  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html,"text/html")
    return doc.body.textContent
  }


  return (
    <div  className="flex gap-[100px] odd:flex-row-reverse ">
      <div className="relative flex-[2] after:content-[''] after:w-[100%] after:h-[100%] after:bg-[#9be7e7] after:absolute after:top-[20px] after:left-[-20px] after:z-[-1]">
        <img className='w-full h-[400px] object-cover' src={`../upload/${post.img}`} alt="icon"/>
      </div>
      <div className='flex-[3] flex flex-col justify-between'>
        <Link to={`/post/${post.id}`}>
          <h1 className='text-[35px] font-bold'>{post.title}</h1>
        </Link>
        <p className='text-[18px]'>{getText(post.desc)}</p>
        <button className='bg-white w-[max-content] py-[10px] px-[20px] cursor-pointer border border-teal-900 text-teal-900 duration-500 hover:scale-110 hover:border-white hover:bg-[#9be7e7] hover:text-black'>read more</button>
      </div>
    </div>
  )
}

export default Post