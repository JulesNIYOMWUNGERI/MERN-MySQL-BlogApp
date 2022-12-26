import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRecommanded } from '../actions/posts'

const Recommended = ({cat}) => {
  const dispatch = useDispatch()
  const {posts} = useSelector((state) =>state.posts)

  useEffect(() => {
    dispatch(getRecommanded(cat))
  }, [cat])
   

  return (
    <div className='flex flex-col gap-[25px]'>
        <h1 className='font-bold text-[20px] text-[#555]'>Other Post you may like:</h1>
        {posts?.map((post) => (
            <div className='flex flex-col gap-[10px] ' key={post.id}>
                <img className='w-[100%] h-[200px] object-cover' src={`../upload/${post.img}`} alt=''/>
                <h2 className='text-[20px] text-[#555] font-bold'>{post.title}</h2>
                <button className='bg-white w-[max-content] py-[7.5px] px-[15px] cursor-pointer border border-teal-900 text-teal-900 duration-500 hover:scale-110 hover:border-white hover:bg-[#9be7e7] hover:text-black'>Read More</button>
            </div>
        ))}
    </div>
  )
}

export default Recommended