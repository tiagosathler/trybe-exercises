const Service = require('../services');

const getPatient = async (req, res, next) => {
  const { params: { id: patientId } } = req;

  const patient = await Service.getPatient(patientId);

  if (!patient) return next({ code: 404, message: 'patient not found' });

  return res.status(200).json(patient);
};

const listAllPatients = async (req, res, next) => {
  const { query: { includePlans, includeSurgeries, includeAll } } = req;
  
  let results = [];

  if (includePlans) {
    results = await Service.listAllPatientsAndPlans();
  } else if (includeSurgeries) {
    results = await Service.listAllPatientsAndSurgeries();
  } else if (includeAll) {
    results = await Service.listAllPatientsInformation();
  } else {
    results = await Service.listAllPatients();    
  }

  if (results.length === 0) return next({ code: 404, message: 'no patient found' });

  return res.status(200).json(results);
};

const listPatientsOfThePlan = async (req, res, next) => {
  const { params: { id: planId } } = req;

  const results = await Service.listPatientsOfThePlan(planId);
  
  if (!results) return next({ code: 404, message: 'no plan found' });

  return res.status(200).json(results);
};

const listAllSurgeriesByDoctorName = async (req, res, next) => {
  const { query: { doctor } } = req;

  if (!doctor) return next({ code: 422, message: 'doctor name is required' });

  const surgeon = await Service.listAllSurgeriesByDoctorName(doctor);

  if (!surgeon) return next({ code: 404, message: 'doctor not found' });

  return res.status(200).json(surgeon);  
};

const createPatient = async (req, res, next) => {
  const { body: { fullname, planId } } = req;

  if (fullname === undefined || planId === undefined) {
    return next({ code: 400, message: 'body is required' });
  }

  const patient = await Service.createPatient({ fullname, planId });

  if (patient === null) return next({ code: 422, message: 'planId doesn\'t exist' });

  if (patient === false) return next({ code: 422, message: 'patient already exist' }); 

  return res.status(201).json(patient);
};

module.exports = {
  getPatient,
  listAllPatients,
  listPatientsOfThePlan,
  listAllSurgeriesByDoctorName,
  createPatient,
};