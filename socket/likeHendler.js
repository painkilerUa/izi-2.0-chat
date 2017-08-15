"use strict"
const models = require('../models');
const log = require('../utils');

module.exports = (socket) => {
    return (data) => {
        return models.ChatBan.create({
            chat_id: data.chatId,
            user_id: data.userId
        }).then((resolve) => {
            resolve
        }).catch((err) => {
            log.info('Error on banHandler.js ' + err)
        })
}};
