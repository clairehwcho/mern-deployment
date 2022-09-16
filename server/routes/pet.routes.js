const express = require('express');

const {
    handleCreatePet,
    handleGetAllPets,
    handleGetPetById,
    handleUpdatePetById,
    handleDeletePetById
} = require('../controllers/pet.controller');

const router = express.Router();

router.post('/pets/new', handleCreatePet);
router.get('/', handleGetAllPets);
router.get('/pets/:id', handleGetPetById);
router.put('/pets/:id/edit', handleUpdatePetById);
router.delete('/pets/:id/delete', handleDeletePetById);

module.exports = { petRouter: router };
