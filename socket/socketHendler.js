"use strict"
const io = require('socket.io');
const log = require('../utils');
const config = require('../config');
//const EventEmitter = require('events');


// class ApiEmitter extends EventEmitter {}
// const apiEmitter = new ApiEmitter();
// apiEmitter.on('getAllDepartments', () => {
//     console.log(departments);
// });



class SocketHendler {
    constructor(server, socketConnections) {
        this.socketIo = io(server);
        this.handlers = {};
        this.connactions = socketConnections;
    }
    start(){
        let users = [];
        this.socketIo.on('connection', (socket) => {
            console.log('New connection ', socket.id );


            socket.on('disconnect', () => {
                console.log('user disconnected');
            });
            socket.on('error', (error) => {
                log.info('Error during socked connection, ' + error)
            });
        })
    }
}
module.exports = SocketHendler;



