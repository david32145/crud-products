const { Model, DataTypes } = require("sequelize");
module.exports = sequelize => {
  class Product extends Model {}
  Product.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(30),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio"
          },
          len: {
            args: [4, 30],
            msg: "Esse campo deve ter entre 4 e 30 caracteres"
          }
        }
      },
      validDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          isDate: {
            msg: "Esse campo deve ter uma data válida"
          }
        }
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate: {
          isDecimal: {
            msg: "Esse campo deve ser um valor decimal"
          },
          min: {
            args: [0],
            msg: "Esse campo não pode ser um valor negativo"
          }
        }
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode está vazio"
          },
          len: {
            args: [5, 100],
            msg: "Esse campo deve ter entre 5 e 10 caracteres"
          }
        }
      }
    },
    {
      sequelize,
      modelName: "product"
    }
  );

  return Product;
};
