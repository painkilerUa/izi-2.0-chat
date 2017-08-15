"use strict"
const models = require('../models');
const log = require('../utils');

module.exports = (socket) => {
    return (data, callback) => {
        socket.join(data.roomId);

        models.Chat.findAll({
            attributes: ['id', 'user_id', 'private_user_id', 'request_id', 'comment', 'date'],
            where: {
                request_id: data.roomId
            }
        }).then((chat) => {
            let usersId = chat.map((item) => {
                return item.user_id
            });
            // let user;
            return models.User.findAll({
                attributes: ['user_id', 'username', 'email', 'display_name'],
                where: {
                    user_id: usersId
                }
            }).then((user) => {
                return {
                    chat: chat,
                    user: user,
                    usersId: usersId
                }
            })
        }).then((chainData) => {
            return models.UserProfileShop.findAll({
                attributes: ['user_id', 'shop_name'],
                where: {
                    user_id: chainData.usersId
                }
            }).then((userProfileShop) => {
                chainData.userProfileShop = userProfileShop;
                return chainData;
            })
        }).then((chainData) => {
            let msgs = [];
            for(let msg of chainData.chat){
                let curMsg = {
                    text: msg.comment,
                    date: msg.date
                }
                for(let shop of chainData.userProfileShop){
                    if(msg.user_id === shop.user_id){
                        curMsg.signature = shop.shop_name;
                        curMsg.type = 'shop'
                        break;
                    }
                }
                if(curMsg.type){
                    msgs.push(curMsg);
                    continue;
                }
                for(let user of chainData.user){
                    if(msg.user_id === user.user_id){
                        curMsg.signature = user.email;
                        curMsg.type = 'user'
                        break;
                    }
                }
                msgs.push(curMsg);
            }
            callback(msgs)
        }).catch((err) => {
            log.info('Error on roomHandler.js ' + err)
        })


}};

