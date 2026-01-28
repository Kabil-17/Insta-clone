import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Suggestion() {
    const [profile, setProfile] = useState(null);
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/profile/")
            .then(response => response.json())
            .then(data => setProfile(data))
            .catch(err => console.log(err))

        fetch("http://localhost:3001/suggestions/")
            .then(response => response.json())
            .then(data => setSuggestions(data))
            .catch(err => console.log(err))

    }, [])
    const follow = document.querySelector(".follow")
    const handleFollow = async (id,username)=>{
        axios.post('http://localhost:3001/followers',{"id":id,"username":username})
        .then(alert('followed'))
        .catch(err=> console.log(err))
    }
    return (
        <>
            <div className="position-relative" style={{ minHeight: '100vh' }}>
                <div className='suggestion w-75 m-4'>
                    {profile ?
                        <div className="d-flex">
                            <img className="dp-s rounded-circle" src={profile.profilePic} alt="" />
                            <h6>{profile.username}</h6>
                            <small className="ms-auto text-primary">Switch</small>
                        </div> :
                        <p>loading...</p>}
                </div>
                <div className="m-4 d-flex justify-content-between">
                    <p>Suggested for you</p>
                    <b>See all</b>
                </div>

                {suggestions.length > 0 ? (
                    <>
                    <div>
                        {suggestions.map(suggestion => (
                            <div key={suggestion.userId}>
                                <div className="d-flex m-3">
                                    <img className="dp rounded-circle" src={suggestion.profilePic} alt="" />
                                    <h6>{suggestion.username}</h6>
                                    <a className="follow text-primary ms-auto text-decoration-none" onClick={()=>{handleFollow(suggestion.id,suggestion.username)}}>Follow</a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div 
  className="d-flex align-items-center position-fixed end-0 z-3 rounded-pill ps-3 me-5" 
  style={{bottom:"70px", width:"200px", height:"50px",boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"}}
>
  <div><i className="bi bi-send"></i>Message</div>
</div>
                    </>
                ) : (
                    <div>Posts loading...</div>
                )}

            </div>
        </>
    )
}

export default Suggestion