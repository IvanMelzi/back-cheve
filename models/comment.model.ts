import { FactoryModel } from './factory.model';
import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../src/config/database";

export class CommentModel extends Model {
  public id!: number;
  public comment!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

CommentModel.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        comment: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
    },
    {
        tableName: "comments",
        sequelize: database,
    }
);

CommentModel.sync({ force: true }).then(() => console.log("Comments table created"));