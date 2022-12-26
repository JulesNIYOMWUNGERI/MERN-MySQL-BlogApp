import React,{useState} from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { AddPost, UpdatePost } from '../actions/posts';
import moment from 'moment';

const Form = () => {
  const history = useNavigate()
  const dispatch = useDispatch()
  const state = useLocation().state

  const [value, setValue] = useState(state?.desc || '');
  const [title, setTitle] = useState(state?.title || '');
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || '');

  const upload = async() => {
    try {
      const formData = new FormData();
      formData.append("file", file)
      const res = await axios.post('http://localhost:8800/api/upload',formData)
      return res.data
    } catch (error) {
      console.log(error)
    }
  }


  const handleSubmit = async(e) => {
    e.preventDefault();
    
    const ImgUrl = await upload();
    const inputs = ({title,desc:value,cat,img:file ? ImgUrl : '',date:moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")})


    if(state?.id) {
      dispatch(UpdatePost(state?.id,inputs))
      history('/')
    }else {
      dispatch(AddPost(inputs))
      history('/')
    }

    e.preventDefault();
  }


  return (
    <div className='mt-[20px] flex gap-[20px]'>
      <div className='flex-[5] flex flex-col gap-[20px]'>
        <input onChange={(e) => {setTitle(e.target.value)}} className='p-[10px] border border-gray-200' value={title} type='text' placeholder='Title' />
        <div className='h-[300px] overflow-y-scroll border border-gray-200'>
          <ReactQuill className='h-[100%]' theme="snow" value={value} onChange={setValue} />;
        </div>
      </div>
      <div className='flex-[2] flex flex-col gap-5'>
        <div className='border border-gray-200 p-[10px] flex-[1] flex flex-col justify-between text-[12px] text-[#555]'>
          <h1 className='text-[30px] font-bold'>Publish</h1>
            <span>
              <b>Status: </b> Draft
            </span>
            <span>
              <b>Visibility: </b> Public
            </span>
            <input onChange={(e) => {setFile(e.target.files[0])}} style={{display:'none'}} type="file" id="file" name=""/>
            <label className='underline cursor-pointer' htmlFor="file">Upload Image</label>
            <div className='flex justify-between'>
              <button className='cursor-pointer text-teal-900 bg-white border border-teal-900 py-[3px] px-[5px]'>Save as a draft</button>
              <button onClick={handleSubmit} className='cursor-pointer text-white bg-teal-700 border border-teal-700 py-[3px] px-[5px] duration-500 hover:scale-110'>{state ? "Update" : "Publish"}</button>
            </div>
        </div>
        <div className='border border-gray-200 p-[10px] flex-[1] flex flex-col justify-between text-[12px] text-[#555] gap-1'>
           <h1 className='text-[30px] font-bold'>Category</h1>
           <div className='flex items-center gap-[2px] text-teal-700'>
             <input type='radio' checked={cat === "art"} name='cat' value='art' id='art'onChange={(e) => {setCat(e.target.value)}}/>
             <label htmlFor="art">Art</label>
           </div>
           <div className='flex items-center gap-[2px] text-teal-700'>
             <input type='radio' checked={cat === "science"} name='cat' value='science' id='science'onChange={(e) => {setCat(e.target.value)}}/>
             <label htmlFor="science">Science</label>
           </div>
           <div className='flex items-center gap-[2px] text-teal-700'>
             <input type='radio' checked={cat === "technology"} name='cat' value='technology' id='technology'onChange={(e) => {setCat(e.target.value)}}/>
             <label htmlFor="technnology">Technnology</label>  
           </div>
           <div className='flex items-center gap-[2px] text-teal-700'>
             <input type='radio' checked={cat === "cinema"} name='cat' value='cinema' id='cinema'onChange={(e) => {setCat(e.target.value)}}/>
             <label htmlFor="cinema">Cinema</label>
           </div>
           <div className='flex items-center gap-[2px] text-teal-700'>
             <input type='radio' checked={cat === "design"} name='cat' value='design' id='design'onChange={(e) => {setCat(e.target.value)}}/>
             <label htmlFor="design">Design</label>
           </div>
           <div className='flex items-center gap-[2px] text-teal-700'>
             <input type='radio' checked={cat === "food"} name='cat' value='food' id='food'onChange={(e) => {setCat(e.target.value)}}/>
             <label htmlFor="food">food</label>            
           </div>
        </div>
      </div>
    </div>
  )
}

export default Form