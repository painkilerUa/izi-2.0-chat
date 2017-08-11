"use strict"
const config = require('../config');
const log = require('../utils');
const models = require('../models')


module.exports = (socket, socketIo) => {
    return (data) => {
        // socketIo.to(data.acceptorId).emit('newChatMsg', {text: data.text});

            // roomId: this.room_id,
            //     text: this.newMsg,
            // senderId: this.senderId,
            // accepterId: this.accepterId


        models.ChatBan.findAll({
            attributes: ['id'],
            where: {
                chat_id: data.roomId,
                user_id: data.senderId
            }
        }).then((r) =>  {
            if(r.length){
                let error = new Error('user banned');
                error.name = 'User error';
                error.code = 'user banned'
                throw error;
            }
            return models.Chat.create({
                user_id: data.senderId,
                private_user_id: data.accepterId,
                request_id: data.roomId,
                comment: data.text,
                date: new Date()
            }).then((r) => {
                return r
            })
        }).then((r) => {
            socketIo.to(data.roomId).emit('newChatMsg', {text: data.text});
        }).catch((err) => {
            if(err.code === 'user banned'){

            }else{
                log.info('Error on chatMessageHandler function ' + err)
            }
        })
    }
}

