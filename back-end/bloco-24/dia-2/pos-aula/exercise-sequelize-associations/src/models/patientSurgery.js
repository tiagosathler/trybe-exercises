// models/UserBook.js
module.exports = (sequelize, _DataTypes) => {
  const PatientSurgery = sequelize.define('PatientSurgery',
    {}, { tableName: 'Patient_surgeries', underscored: true, timestamps: false });

  PatientSurgery.associate = (models) => {
    models.Surgery.belongsToMany(models.Patient, {
      as: 'patients',
      through: PatientSurgery,
      foreignKey: 'surgery_id',
      otherKey: 'patient_id',
    });
    models.Patient.belongsToMany(models.Surgery, {
      as: 'surgeries',
      through: PatientSurgery,
      foreignKey: 'patient_id',
      otherKey: 'surgery_id',
    });
  };

  return PatientSurgery;
};