import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createPet } from '../services/internalApiService';

export const NewPet = (props) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('')
    const [description, setDescription] = useState('');
    const [skillOne, setSkillOne] = useState('');
    const [skillTwo, setSkillTwo] = useState('');
    const [skillThree, setSkillThree] = useState('');

    const [errors, setErrors] = useState(null);

    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleTypeChange = (e) => {
        setType(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    const handleSkillOneChange = (e) => {
        setSkillOne(e.target.value)
    }

    const handleSkillTwoChange = (e) => {
        setSkillTwo(e.target.value)
    }

    const handleSkillThreeChange = (e) => {
        setSkillThree(e.target.value)
    }

    const handleCreatePetSubmit = (e) => {
        e.preventDefault();
        const newPet = { name, type, description, skillOne, skillTwo, skillThree };
        createPet(newPet).then((data) => {

            console.log('new pet data:', data);
            navigate('/');
        })
            .catch((error) => {
                console.log(error);
                setErrors(error?.response?.data?.errors);
            });
    };

    return (
        <div className="container">
            <div className="header">
                <div className="headerRow1">
                    <h1>Pet Shelter</h1>
                    <Link to="/">back to home</Link>
                </div>
                <div className="headerRow2">
                    <h2>Know a pet needing a home?</h2>
                </div>
            </div>

            <div className="content">
                <form className="petForm" onSubmit={handleCreatePetSubmit}>
                    <div className="form-group mb-3 row">
                        <label className="form-label">Pet Name</label>
                        <input className="form-control" type="text" onChange={handleNameChange} />
                        {
                            errors?.name && <span style={{ color: 'red' }}>{errors?.name?.message}</span>
                        }
                    </div>

                    <div className="form-group mb-3 row">
                        <label className="form-label">Pet Type</label>
                        <input className="form-control" type="text" onChange={handleTypeChange} />
                        {
                            errors?.type && <span style={{ color: 'red' }}>{errors?.type?.message}</span>
                        }
                    </div>

                    <div className="form-group mb-3 row">
                        <label className="form-label">Pet Description</label>
                        <input className="form-control" type="text" onChange={handleDescriptionChange} />
                        {
                            errors?.description && <span style={{ color: 'red' }}>{errors?.description?.message}</span>
                        }
                    </div>

                    <div className="form-group mb-3 row">
                        <label className="form-label">Skills (optional):</label>
                    </div>

                    <div className="form-group mb-3 row">
                        <label className="form-label">Skill 1</label>
                        <input className="form-control" type="text" onChange={handleSkillOneChange} />
                        {
                            errors?.skillOne && <span style={{ color: 'red' }}>{errors?.skillOne?.message}</span>
                        }
                    </div>

                    <div className="form-group mb-3 row">
                        <label className="form-label">Skill 2</label>
                        <input className="form-control" type="text" onChange={handleSkillTwoChange} />
                        {
                            errors?.skillTwo && <span style={{ color: 'red' }}>{errors?.skillTwo?.message}</span>
                        }
                    </div>

                    <div className="form-group mb-3 row">
                        <label className="form-label">Skill 3</label>
                        <input className="form-control" type="text" onChange={handleSkillThreeChange} />
                        {
                            errors?.skillThree && <span style={{ color: 'red' }}>{errors?.skillThree?.message}</span>
                        }
                    </div>

                    <div className="form-group mb-3 row">
                        <button className="btn btn-primary mb-3">
                            Add Pet
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default NewPet;