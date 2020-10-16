import { FactoryModel } from './factory.model';
import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../src/config/database";

export class BeerModel extends Model {
  public id!: number;
  public name!: string;
  public price!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

BeerModel.init(
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
        price: {
            type: new DataTypes.INTEGER,
            allowNull: false,
        },
        factoryId: {
            type: new DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: "beers",
        sequelize: database,
    }
);

BeerModel.sync({ force: true }).then(() => console.log("Beers table created"));