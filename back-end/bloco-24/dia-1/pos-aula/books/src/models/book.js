const Book = (sequelize, DataTypes) => {
  const User = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
  }, {
    freezeTableName: false,
    underscored: true,
    tableName: 'Books',
  });

  return User;
};

module.exports = Book;

// const {
//   Model,
// } = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//   class Book extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Book.init({
//     id: DataTypes.INTEGER,
//     title: DataTypes.STRING,
//     author: DataTypes.STRING,
//     pageQuantity: DataTypes.INTEGER,
//     createAt: DataTypes.DATE,
//   }, {
//     sequelize,
//     modelName: 'Book',
//   });
//   return Book;
// };