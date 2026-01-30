import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

function ViewStory() {
    const { id, tot } = useParams();

    const [story, setStory] = useState(null)
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:3001/story/${id}`)
            .then(res => res.json())
            .then(data => setStory(data))
            .catch(err => console.log(err))
        
        if (id > tot || id < 1) {
        navigate('/');
    }
    }, [id,tot])

    const handlePrevious = ()=>{
        navigate(`/story/${Number(id) - 1}/${tot}`)
    }
    const handleNext = ()=>{
        navigate(`/story/${Number(id) + 1}/${tot}`)
    }

    return (
        <div>{story ?
            <div>
                <div className="position-relative" onClick={()=>{navigate('/')}}>
                    <i className="bi bi-x-lg position-absolute end-0 m-3"></i>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <i className="bi bi-arrow-left-circle-fill"
                    onClick={handlePrevious}></i>
                    <img className="vh-100" style={{ width: "400px" }} src={story.image} alt="" />
                    <i className="bi bi-arrow-right-circle-fill"
                    onClick={handleNext}></i>
                </div>
            </div>

            : <div>loading...</div>}
        </div>
    );
}

export default ViewStory