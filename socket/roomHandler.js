"use strict"
const models = require('../models');
const log = require('../utils');

module.exports = (socket) => {
    return (data, callback) => {
        socket.join(data.roomId);

        models.Chat.findAll({
            attributes: ['id', 'user_id', 'private_user_id', 'request_id', 'comment', 'date'],
            // include:  [ {model: models.User, attributes: ['user_id', 'email'], required: true}],
            // include:  [ {model: models.UserProfileShop, attributes: ['user_id', 'shop_name'], required: true}],
            where: {
                request_id: data.roomId
            }
        }).then((r) => {
            r

        }).catch((err) => {
            err
            // if(err.code === 'user banned'){
            //
            // }else{
            //     log.info('Error on chatMessageHandler function ' + err)
            // }
        })

        callback('work')
}};

