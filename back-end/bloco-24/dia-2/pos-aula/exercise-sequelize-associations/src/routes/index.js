const { Router } = require('express');
const rescue = require('express-rescue');
const Controller = require('../controllers');

const Patients = Router();
const Plans = Router();
const Doctor = Router();

Patients
  .get('/', rescue(Controller.listAllPatients))
  .get('/:id', rescue(Controller.getPatient))
  .post('/', rescue(Controller.createPatient));
  
Plans
  .get('/:id', rescue(Controller.listPatientsOfThePlan));

Doctor
  .get('/', rescue(Controller.listAllSurgeriesByDoctorName));

module.exports = {
  Patients,
  Plans,
  Doctor,
};