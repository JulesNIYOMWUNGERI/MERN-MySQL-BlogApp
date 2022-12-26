import {db} from '../db.js'

export const getPosts = (req,res) => {
    const q = req.query.cat ? 'SELECT * FROM posts WHERE cat = ?' : 'SELECT * FROM posts'

    db.query(q,[req.query.cat],(err,data) => {
        if(err) return res.status(500).json(err)

        res.status(200).json(data);
    })
}

export const getPostById = (req,res) => {

    const q = "SELECT p.id, `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`, `date` FROM users u JOIN posts p ON u.id=p.uid WHERE p.id = ?"

    db.query(q,[req.params.id],(err,data) => {
        if(err) return res.status(500).json(err)

        res.status(200).json(data[0])
    })
}


export const deletePost = (req,res) => {
    const tokenId = req.userId;
    if(!tokenId) return res.status(401).json("Not Authenticated!")

    const postId = req.params.id

    const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?"

    db.query(q,[postId,tokenId],(err,data) => {
        if(err) return res.status(403).json("You can delete only your post!")

        res.status(200).json("Post deleted successfully!");
    })
}

export const AddPost = (req,res) => {
    const tokenId = req.userId;
    if(!tokenId) return res.status(401).json("Not Authenticated!")

    const q = "INSERT INTO posts(`title`, `desc`, `img`, `cat`, `date`, `uid`) VALUES (?)"

    const values = [
        req.body.title,
        req.body.desc,
        req.body.img,
        req.body.cat,
        req.body.date,
        req.userId
    ]

    db.query(q,[values],(err,data) => {
        if(err) return res.status(500).json(err)

        return res.status(200).json("Post has been created.")
    })
}

export const updatePost = (req,res) => {
    const tokenId = req.userId;
    if(!tokenId) return res.status(401).json("Not Authenticated!")

    const postId = req.params.id

    const q = "UPDATE posts SET `title`=?, `desc`=?, `img`=?, `cat`=? WHERE `id` = ? AND `uid` = ?"

    const values = [
        req.body.title,
        req.body.desc,
        req.body.img,
        req.body.cat,
    ]

    db.query(q, [...values,postId,tokenId],(err,data) => {
        if(err) return res.status(500).json("you are not allowed to update this post")

        return res.status(200).json("Post has been updated.")
    })
}

