"use strict";

module.exports = (sequelize, DataTypes) => {
    let UserProfileShop = sequelize.define("UserProfileShop", {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        shop_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        kpp: {
            type: DataTypes.STRING,
            allowNull: false
        },
        inn: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bik: {
            type: DataTypes.STRING,
            allowNull: false
        },
        raschetniy_schet: {
            type: DataTypes.STRING,
            allowNull: false
        },
        is_confirmed: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0
        },
    }, {
        underscored: true,
        tableName: 'user_profile_shop',
        timestamps: false
    });

    return UserProfileShop;
};
