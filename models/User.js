"use strict";

module.exports = (sequelize, DataTypes) => {
    let User = sequelize.define("User", {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            defaultValue: null,
            unique: 'username'
        },
        email: {
            type: DataTypes.STRING,
            defaultValue: null,
            unique: 'email'
        },
        display_name: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.INTEGER,
            defaultValue: null
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1
        },
    }, {
        underscored: true,
        tableName: 'user',
        timestamps: false
    });

    return User;
};
