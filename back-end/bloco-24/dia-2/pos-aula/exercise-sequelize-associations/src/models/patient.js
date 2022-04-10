module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    patientId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    fullname: DataTypes.STRING(50),
    planId: { type: DataTypes.INTEGER, foreingKey: true },
  },
  {
    timestamps: true,
    underscored: true,
    createdAt: 'published',
    updatedAt: 'updated',
    tableName: 'Patients',
  });

  Patient.associate = (models) => {
    Patient.belongsTo(models.Plan,
      { foreignKey: 'plan_id', as: 'plan' });
  };

  return Patient;
};