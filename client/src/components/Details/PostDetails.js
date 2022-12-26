import React, { useEffect, useState } from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import {AiTwotoneDelete} from 'react-icons/ai'
import {IoMdCreate} from 'react-icons/io'
import moment from 'moment';
import Recommended from '../Recommanded/Recommended'
import { useDispatch,useSelector } from 'react-redux'
import { getPostById,deletePost } from '../actions/posts'

const PostDetails = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const id = useParams()?.id;


  useEffect(() => {
    dispatch(getPostById(id))
  },[id])

  
  const handleDelete = () => {
    dispatch(deletePost(id,history))
  }


  const {post} = useSelector((state) =>state.posts)
  
  const CurrentUser = JSON.parse(localStorage.getItem('profile'))?.result;


  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html,"text/html")
    return doc.body.textContent
  }



  return (
    <div className='flex gap-[50px]'>
      <div className='flex-[5] flex flex-col gap-[30px]'>
        <img className='w-[100%] h-[300px]' src={`../upload/${post?.img}`} alt=""/>
        <div className='flex items-center gap-[10px] text-[14px]'>
          <img className='w-[50px] h-[50px] rounded-[50%] object-cover bg-gray-400' src={post?.userImg} alt=''/>
          <div>
            <span className='font-bold'>{post?.username}</span>
            <p>Posted {moment(post?.date).fromNow()}</p>
          </div>
         {CurrentUser?.username === post?.username && 
         (<div className='flex flex-row gap-[10px]'>
            <Link to={`/form?edit=2`} state={post}>
               <div className='bg-green-300 w-[30px] h-[30px] rounded-[50%] flex justify-center items-center cursor-pointer duration-500 hover:scale-110'><IoMdCreate/></div>
            </Link>
            <div onClick={handleDelete} className='bg-red-300 w-[30px] h-[30px] rounded-[50%] flex justify-center items-center cursor-pointer duration-500 hover:scale-110'><AiTwotoneDelete/></div>
          </div>)}
        </div>
        <h1 className='text-[42px] font-bold text-[#333]'>{post?.title}</h1>
        {getText(post?.desc)}
      </div>
      <div className='flex-[2]'>
        <Recommended cat={post?.cat}/>
      </div>
    </div>
  )
}

export default PostDetails