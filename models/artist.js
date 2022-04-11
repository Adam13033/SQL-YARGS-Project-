const { DataTypes } = require("sequelize");

const db = require("../db/connection");

const Artist = db.define(
  "Artist",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    id: {
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    indexed: [{ unique: true, fields: ["name"]["id"] }],
  }
);

module.exports = Artist;
