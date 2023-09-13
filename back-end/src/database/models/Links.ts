import { DataTypes } from "sequelize";
import { sequelize } from "../pgClient";
import crypto from "crypto";

const Link = sequelize.define("links", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    unique: true,
    defaultValue: crypto.randomUUID(),
  },
  url: {
    type: DataTypes.STRING,
  },
  shortener: {
    type: DataTypes.STRING,
    defaultValue: 0,
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
