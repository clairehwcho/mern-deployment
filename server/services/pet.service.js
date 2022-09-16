const { Pet } = require('../models/pet.model');

const createPet = async (data) => {
    console.log('service: createPet');
    const pet = await Pet.create(data);
    return pet;
};

const getAllPets = async () => {
    const pets = await Pet.find();
    return pets;
};

const getPetById = async (id) => {
    const pet = await Pet.findOne({ _id: id });
    return pet;
};

const updatePetById = async (id, data) => {
    const pet = await Pet.findOneAndUpdate({ _id: id }, data, {new: true, runValidators: true});
    return pet;
}

const deletePetById = async (id) => {
    const pet = await Pet.findOneAndDelete({ _id: id });
    return pet;
};

module.exports = {
    createPet,
    getAllPets,
    getPetById,
    updatePetById,
    deletePetById,
}