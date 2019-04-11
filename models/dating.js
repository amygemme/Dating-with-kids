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
    match_man: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    match_woman: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    match_nonbinary: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    fun: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    support: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    love: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    unknown: {
      type: Sequelize.BOOLEAN,
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
    bio: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1, 400]
      }
    },
    gender_self: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    }
  });
  return Dating;
};