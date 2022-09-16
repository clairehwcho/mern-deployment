import { useState, useEffect } from "react";
import { getAllPets } from "../services/internalApiService";
import { Link } from "react-router-dom";

export const AllPets = (props) => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        getAllPets()
            .then((data) => {
                console.log(data);
                setPets(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="container">
            <div className="header">
                <div className="headerRow1">
                    <h1>Pet Shelter</h1>
                    <Link to="/pets/new">add a pet to the shelter</Link>
                </div>
                <div className="headerRow2">
                    <h2>These pets are looking for a good home</h2>
                </div>
            </div>

            <div className="content">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pets
                            .sort((a, b) => a.type.localeCompare(b.type))
                            .map((pet) => {
                                const { _id, name, type } = pet;
                                return (
                                    <tr>
                                        <td>
                                            <div key={_id}>
                                                <span>{name}</span>
                                            </div>
                                        </td>

                                        <td>
                                            <div key={_id}>
                                                <span>{type}</span>
                                            </div>
                                        </td>

                                        <td>

                                            <Link to={`/pets/${_id}`}>
                                                <span> details </span>
                                            </Link>

                                            <span> | </span>
                                            <Link to={`/pets/${_id}/edit`}>
                                                <span> edit </span>
                                            </Link>

                                        </td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllPets;