import React from 'react'
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="m-3">
        <div className="d-flex flex-column gap-3 position-fixed">
          <img className="text-logo" src="src/assets/InstagramText.svg" alt="" />
          <div className="sidebar mt-5">
            <div><i className="bi bi-house-door-fill"></i>Home</div>
            <div><i className="bi bi-search"></i>Search</div>
            <div><i className="bi bi-compass"></i>Explore</div>
            <div><i className="bi bi-play-btn"></i>Reels</div>
            <div><i className="bi bi-send"></i>Messages</div>
            <div><i className="bi bi-heart"></i>Notifications</div>
            <div><i className="bi bi-plus-lg"></i>Create</div>
            <div className="" onClick={() => { navigate('/profile') }}>
              <i className="bi bi-person-circle"></i>Profile
            </div>
          </div>
        </div>
        <div className="d-flex flex-column gap-3 position-fixed bottom-0 mb-3">
          <div><i className="bi bi-threads"></i>Threads</div>
          <div><i className="bi bi-list"></i>More</div>
        </div>
      </div>
    </>
  )
}

export default Sidebar;