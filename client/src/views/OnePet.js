import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { deletePetById } from "../services/internalApiService";
import { getPetById } from '../services/internalApiService';


export const OnePet = (props) => {
    const [pet, setPet] = useState(null);
    const [counter, setCounter] = useState(0);

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        getPetById(id)
            .then((data) => {
                console.log(data);
                setPet(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    if (pet === null) {
        return null;
    }

    const { name, type, description, skillOne, skillTwo, skillThree } = pet;

    const handleDeleteClick = () => {
        if (window.confirm(`Are you sure you want to adopt ${name}?`)) {
            deletePetById(id)
                .then((deletedPet) => {
                    navigate('/');
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }


    const handleLikeClick = (e) => {
        setCounter(count => count + 1);
        e.target.disabled = true;
    }

    return (
        <div className="container">
            <div className="header">
                <div className="headerRow1">
                    <h1>Pet Shelter</h1>
                    <Link to="/">back to home</Link>
                </div>
                <div className="headerRow2">
                    <h2>Details about: {name}</h2>
                    <button onClick={(e) => {
                        handleDeleteClick();
                    }} className="btn btn-sm btn-danger mx-1">
                        Adopt {name}
                    </button>
                </div>
            </div>

            <div className="content">
                <div className="petDetail">
                    <ul>
                        <li>Pet Type: {type}</li>
                        <li>Description: {description}</li>
                        <li>Skills: {skillOne}, {skillTwo}, {skillThree}</li>
                    </ul>
                </div>

                <div className="petLike">
                    <button
                        onClick={handleLikeClick}
                        className="btn btn-sm btn-primary mx-1">
                        Like {name}
                    </button>

                    <span className="likeCount">{counter} like(s)</span>
                </div>
            </div>
        </div>
    )
};

export default OnePet;