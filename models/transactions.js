// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Transactions = sequelize.define('transactions', {
    timestamp: {
      type: DataTypes.BIGINT,
    },
    recVolume: {
      type: DataTypes.INTEGER,
      field: 'RECVolume',
    },
    recAmount: {
      type: DataTypes.INTEGER,
      field: 'RECAmount',
    },
    energyVolume: {
      type: DataTypes.INTEGER,
      field: 'EnergyVolume',
    },
    energyAmount: {
      type: DataTypes.INTEGER,
      field: 'EnergyAmount',
    },
    recieptNumber: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'Transactions',
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  Transactions.associate = (models) => {
    Transactions.belongsTo(models.users, {
      foreignKey: {
        name: 'fromAdminIdKey',
        field: 'fromAdminId',
      },
      target: {
        name: 'userId',
      },
      as: 'fromAdmin',
    });
    Transactions.belongsTo(models.rpPs, {
      foreignKey: {
        name: 'rppIdKey',
        field: 'RPPId',
      },
      as: 'rpp',
    });
    Transactions.belongsTo(models.sellers, {
      foreignKey: {
        name: 'toSellerIdKey',
        field: 'toSellerId',
      },
      target: {
        name: 'userId',
      },
      as: 'toSeller',
    });
  };

  return Transactions;
};
