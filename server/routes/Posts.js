import express from 'express'
import { AddPost,getPosts,getPostById,deletePost,updatePost } from '../controllers/Posts.js';
import auth from '../middleware/index.js';


const router = express.Router();


router.get("/", getPosts)
router.get("/:id", getPostById)
router.post("/",auth, AddPost)
router.delete("/:id",auth, deletePost)
router.put("/:id",auth, updatePost)

export default router;