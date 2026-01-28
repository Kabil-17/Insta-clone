import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom";

function Stories() {
  const navigate = useNavigate();
  const [stories,setStories] = useState([]);
  const [error,setError] = useState(null);

  useEffect(()=>{
    fetch("http://localhost:3001/story")
    .then((response) => {
      if(!response.ok){
        throw Error("Couldn't retrive data")
      }
      return response.json();
  })
    .then((data) => setStories(data))
    .catch((err)=> {
      setError(err.message)
      console.log(err.messge)
    })
  },[])

  if(error){
      return <p>{error}</p>
    }
    const tot = stories.length;

  return (
      <div className="story d-flex">
       {stories.length > 0 ? (
        stories.map((story)=>(
          <div key={story.id} className="m-2" onClick={()=>{navigate(`/story/${story.id}/${tot}`)}}>
            <div className="gradient-border">
              <img className="dp-story rounded-circle" src={story.user.profilePic} alt="dp" />
            </div>
            
            <p className="text-truncate" style={{width:"80px"}}>{story.user.username}</p>
          </div>
        ))
       ):(
        <p>loading...</p>
       )}
      </div>
  )
}

export default Stories