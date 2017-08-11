"use strict";

module.exports = (sequelize, DataTypes) => {
    let Chat = sequelize.define("Chat", {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        private_user_id: {
            type: DataTypes.INTEGER,
            defaultValue: null
        },
        request_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: null
        },
        is_new: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    }, {
        underscored: true,
        tableName: 'chat',
        timestamps: false
    });

    return Chat;
};
