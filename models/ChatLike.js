"use strict";

module.exports = (sequelize, DataTypes) => {
    let ChatLike = sequelize.define("ChatLike", {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        chat_id: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        underscored: true,
        tableName: 'chat_like',
        timestamps: false
    });

    return ChatLike;
};
