import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AllPets } from './views/AllPets';
import { OnePet } from './views/OnePet';
import { NewPet } from './views/NewPet';
import { EditPet } from './views/EditPet';
import './App.css';

function App () {
    return (
        <div className="container">

            <Routes>
                <Route path="/" element={<AllPets />} />
                <Route path="/pets/new" element={<NewPet />} />
                <Route path="/pets/:id/edit" element={<EditPet />} />
                <Route path="/pets/:id" element={<OnePet />} />
            </Routes>
        </div>
    );
}
export default App;