import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getAllPosts } from '../actions/posts'
import Post from '../posts/post/Post'

const Home = () => {
  const cat = useLocation().search
  const {posts} = useSelector((state) =>state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllPosts(cat))
  }, [cat])





  return (
    <div className='pt-[50px]'>
      <div className='flex flex-col gap-[150px]'>
        {posts.map((post) => (
            <Post key={post.id} post={post}/>
        ))}
      </div>
    </div>
  )
}

export default Home