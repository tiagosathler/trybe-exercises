const Sequelize = require('sequelize');

const { Op } = Sequelize;

const config = require('../config/config');

const sequelize = new Sequelize(config.development);

const Model = require('../models');

const listAllPatients = async () => {
  const patients = await Model.Patient.findAll({ attributes: ['patientId', 'fullname', 'planId'] });
  return patients;
};

// -------------------------------------------
// GET PATIENT BY ID:
const getPatient = async (patientId) => {
  const patient = Model.Patient.findByPk(patientId, {
    attributes: ['patientId', 'fullname', 'planId'],
  });

  return patient;
};

// -------------------------------------------
// LIST ALL PATIENTS AND PLANS:

// LAZY LOADING: METODO 1
// const listAllPatientsAndPlans = async () => {
//   const patients = await listAllPatients();
  
//   const results = await Promise.all(patients.map(async ({ patientId, planId, fullname }) => {
//     const plan = await Model.Plan.findOne({
//       where: { planId },
//       attributes: ['planId', 'coverage', 'price'],
//     });
//     return { patientId, fullname, plan: { ...plan.dataValues } };
//   }));

//   return results;
// };

// LAZY LOADING: METODO 2
// const listAllPatientsAndPlans = async () => {
//   const patients = await listAllPatients();
  
//   const results = await Promise.all(
//     patients.map(async ({ patientId, fullname }) => (
//       Model.Patient.findByPk(patientId)
//         .then((patient) => 
//           patient.getPlan()
//             .then((plan) => {
//               const { planId, coverage, price } = plan;
//               return { patientId, fullname, plan: { planId, coverage, price } };
//             })))),
//   );

//   return results;
// };

// EAGER LOADING:
const listAllPatientsAndPlans = async () => {
  const patients = await Model.Patient.findAll({
    attributes: ['patientId', 'fullname'],
    include: { model: Model.Plan, as: 'plan', attributes: ['planId', 'coverage', 'price'] },
  });
  
  return patients;
};

// -------------------------------------------
// LIST ALL PATIENTS AND SURGERIES:

// LAZY LOADING: MÉTODO 1
// const listAllPatientsAndSurgeries = async () => {
//   const patients = await listAllPatients();
  
//   const results = await Promise.all(patients.map(async ({ patientId }) => {
//     const patient = await Model.Patient.findOne({
//       where: { patientId },
//       attributes: ['patientId', 'fullname'],
//       include: [{
//         model: Model.Surgery,
//         as: 'surgeries',
//         through: { attributes: [] },
//         attributes: ['surgeryId', 'doctor', 'specialty'],
//       }],
//     });
//     return { ...patient.dataValues };
//   }));

  // LAZY LOADING: MÉTODO 2
const listAllPatientsAndSurgeries = async () => {
  const patients = await listAllPatients();
  
  const results = await Promise.all(
    patients.map(async ({ patientId }) => (
      Model.Patient.findByPk(patientId)
        .then((patient) => 
          patient.getSurgeries()
            .then((surg) => {
              const { fullname } = patient;
              const surgeries = surg.map(({ surgeryId, doctor, specialty }) => (
                { surgeryId, doctor, specialty }));
              return { patientId, fullname, surgeries };
            })))),
  );

  return results;
};

  // EAGER LOADING:
// const listAllPatientsAndSurgeries = async () => {
//   const patients = Model.Patient.findAll({
//       attributes: ['patientId', 'fullname'],
//       include: [{
//         model: Model.Surgery,
//         as: 'surgeries',
//         through: { attributes: [] },
//         attributes: ['surgeryId', 'doctor', 'specialty'],
//       }],
//   });
  
//   return patients;
// };

// -------------------------------------------
// LIST ALL PATIENTS ALL INFORMATION:

// LAZY LOADING:
// const listAllPatientsInformation = async () => {
//   const patiensAndPlans = await listAllPatientsAndPlans();
//   const patientAndSurgeries = await listAllPatientsAndSurgeries();
  
//   const results = patiensAndPlans
//     .map((plan, index) => ({ ...plan, ...patientAndSurgeries[index] }));

//   return results;
// };

  // EAGER LOADING:
const listAllPatientsInformation = async () => {
  const patients = Model.Patient.findAll({
      attributes: ['patientId', 'fullname'],
      include: [
        {
          model: Model.Surgery,
          as: 'surgeries',
          through: { attributes: [] },
          attributes: ['surgeryId', 'doctor', 'specialty'],
        },
        {
          model: Model.Plan,
          as: 'plan',
          attributes: ['planId', 'coverage', 'price'],
        },
      ],
  });
  
  return patients;
};

// -------------------------------------------
// LIST PATIENTS OF A PLAN ID:
const listPatientsOfThePlan = async (planId) => {
  const plan = await Model.Plan.findOne({
    where: { planId },
    attributes: ['planId', 'coverage', 'price'], 
  });

  if (!plan) return null;

  const patients = await Model.Patient.findAll({
    where: { planId },
    attributes: ['patientId', 'fullName'],
  });

  return { ...plan.dataValues, patients };
};

// -------------------------------------------
// LIST ALL SURGERIES PERFORMED BY A DOCTOR:
const listAllSurgeriesByDoctorName = async (doctor) => {
  const surgeon = await Model.Surgery.findOne({
    where: { doctor: { [Op.like]: `%${doctor}%` } },
    attributes: ['doctor', 'surgeryId', 'specialty'],
  });

  if (!surgeon) return null;

  const { dataValues: { surgeryId } } = surgeon;

  const surgeries = await Model.Patient.findAll({
    attributes: ['patientId', 'fullname'],
    include: [{
      where: { surgeryId },
      model: Model.Surgery,
      as: 'surgeries',
      through: { attributes: [] },
      attributes: { exclude: ['doctor', 'specialty', 'surgeryId', 'published', 'updated'] },
    }],  
  });

  return { ...surgeon.dataValues, surgeries };
};

// -------------------------------------------
// CREATE PACIENT WITH TRANSACTION:
const createPatient = async ({ fullname, planId }) => {
  const plan = await Model.Plan.findByPk(planId);

  if (!plan) return null;

  const [patient, created] = await sequelize.transaction(async (t) => Model.Patient.findOrCreate({
    where: { fullname },
    defaults: {
      planId,
    },
    transaction: t,
  }));

  if (!created) return false;

  return patient;
};

module.exports = {
  getPatient,
  listAllPatients,
  listAllPatientsAndPlans,
  listAllPatientsAndSurgeries,
  listAllPatientsInformation,
  listPatientsOfThePlan,
  listAllSurgeriesByDoctorName,
  createPatient,
};