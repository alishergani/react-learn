import io from 'socket.io-client';
const socket = io('http://localhost:3333');


function sendMsg(data) {
    console.log('createFish');
    socket.emit('createFish', data)
}


export { sendMsg, socket }