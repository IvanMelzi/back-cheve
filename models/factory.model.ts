import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../src/config/database";

export class FactoryModel extends Model {
  public id!: number;
  public name!: string;
  public location!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

FactoryModel.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        location: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
    },
    {
        tableName: "factories",
        sequelize: database,
    }
);

FactoryModel.sync({ force: true }).then(() => console.log("Factory table created"));