module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    planId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    coverage: DataTypes.STRING(45),
    price: DataTypes.DOUBLE,
  },
  {
    timestamps: true,
    underscored: true,
    createdAt: 'published',
    updatedAt: 'updated',
    tableName: 'Plans',
  });

  Plan.associate = (models) => {
    Plan.hasMany(models.Patient,
    { foreignKey: 'patientId', as: 'patients' });
  };

  return Plan;
};