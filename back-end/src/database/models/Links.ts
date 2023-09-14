import { DataTypes } from "sequelize";
import { sequelize } from "../pgClient";

const Link = sequelize.define("links", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    unique: true,
    defaultValue: DataTypes.UUIDV4,
  },
  url: {
    type: DataTypes.STRING,
  },
  shortener: {
    type: DataTypes.STRING,
  },
  clicks: {
    type: DataTypes.INTEGER,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "active",
  },
});

export default Link;
