import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Profile() {

    const [profile, setProfile] = useState(null);
    const [followers, setFollowers] = useState([]);
    const [unfollowed,setUnfollowed] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:3001/profile')
            .then(res => {
                setProfile(res.data)
                console.log(res);
            })
            .catch(err => console.log(err))

        axios.get('http://localhost:3001/followers')
            .then(data => setFollowers(data.data))
            .catch(err => console.log(err))
    }, [unfollowed])

    function Handleonchange(e) {
        setProfile(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    const handleUpdate = async () => {
        axios.put('http://localhost:3001/profile', profile)
            .then(console.log("updated"))
            .catch(err => console.log(err))
    }

    const handleUnfollow = async (id)=>{
        axios.delete(`http://localhost:3001/followers/${id}`)
        .then(alert('unfollowed'))
        .then(setUnfollowed(!unfollowed)) //just for re-render
        .catch(err=>console.log(err))
    }

    return (
        <div className='m-5'>
            {profile ? (
                <div>
                    <img src={profile.profilePic} className="profile rounded-circle" alt="" />
                    <h5>{profile.username}</h5>
                    <input type="text"
                        value={profile.username}
                        name="username"
                        className='form-control my-4'
                        onChange={Handleonchange}
                    />
                    <input type="text"
                        name="profilePic"
                        value={profile.profilePic}
                        className='form-control'
                        onChange={Handleonchange}
                    />
                    <button className='btn btn-primary my-4' onClick={handleUpdate}>Update</button>
                </div>
            ) :
                (<div>loading...</div>)}

            {followers.length > 0 ? (
                followers.map(follower => (
                    <div key={follower.id} className='d-flex'>
                        {follower.username}
                        <button className='btn btn-primary ms-auto my-2' onClick={()=>{handleUnfollow(follower.id)}}>Unfollow</button>
                    </div>
                    
                ))
            ) : (
                <div>loading...</div>
            )}
        </div>
    )
}

export default Profile