module.exports = (sequelize, DataTypes) => {
  const Surgery = sequelize.define('Surgery', {
    surgeryId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    specialty: DataTypes.STRING(50),
    doctor: DataTypes.STRING(50),
  },
  {
    timestamps: true,
    underscored: true,
    createdAt: 'published',
    updatedAt: 'updated',
    tableName: 'Surgeries',
  });

  // Surgery.associate = (models) => {
  //   Surgery.hasOne(models.Plan,
  //     { foreignKey: 'planId', as: 'plans' });
  // };

  return Surgery;
};