import { useEffect, useState } from 'react'

function Posts() {
  const [posts,setPosts] = useState([])
   useEffect(()=>{
    fetch("http://localhost:3001/posts")
    .then(response=> response.json())
    .then(data => setPosts(data))
    .catch(err=>console.log(err))
   },[])
   console.log(posts);
   
  return (
    <>
    <div className="d-flex justify-content-center">
      {posts.length > 0 ?(
        <div>
        {posts.map(post=>(
          <div className="mt-5" key={post.postId}>
            <div className="d-flex">
              <img className="dp rounded-circle" src={post.user.profilePic} alt="" />
              <h6>{post.user.username}</h6>
            </div>
            <img className="image" src={post.image} alt="" />
           
              <div className="d-flex gap-2">
                <i className="bi bi-heart"></i>
                <i className="bi bi-chat"></i>
                <i className="bi bi-send"></i>
              </div>
              <div><b>{post.likes}</b></div>
              <p>{post.caption}</p>
          </div>
        ))}
        </div>
      ):(
        <div>Posts loading...</div>
      ) }
    </div>
    </>
  )
}

export default Posts