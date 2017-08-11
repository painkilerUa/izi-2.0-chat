"use strict";

module.exports = (sequelize, DataTypes) => {
    let ChatBan = sequelize.define("ChatBan", {
        chat_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: 'chat_id_UNIQUE'
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        underscored: true,
        tableName: 'chat_ban',
        timestamps: false
    });

    return ChatBan;
};
