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
    }, [id])

    if (id > tot || id < 1) {
        navigate('/');
    }

    return (
        <div>{story ?
            <div>
                <div className="position-relative" onClick={()=>{navigate('/')}}>
                    <i className="bi bi-x-lg position-absolute end-0 m-3"></i>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <Link to={`https://kabil-17.github.io/Insta-clone/story/${Number(id) - 1}/${tot}`}><i className="bi bi-arrow-left-circle-fill"></i></Link>
                    <img className="vh-100" style={{ width: "400px" }} src={story.image} alt="" />
                    <Link to={`https://kabil-17.github.io/Insta-clone/story/${Number(id) + 1}/${tot}`}><i className="bi bi-arrow-right-circle-fill"></i></Link>
                </div>
            </div>

            : <div>loading...</div>}
        </div>
    );
}

export default ViewStory