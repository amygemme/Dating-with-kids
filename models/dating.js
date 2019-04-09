module.exports = function (sequelize, Sequelize) {
  const Dating = sequelize.define("Dating", {
    first_name: {
      type: Sequelize.STRING, 
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    last_name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    email: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    num_kids: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    custody: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    gender_self: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    gender_match: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    interest: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    zip_code: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
  });
  return Dating;
};