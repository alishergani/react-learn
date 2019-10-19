const app = require('express')();
const routes = require('./routes')
const cors = require('cors')
const http = require('http').Server(app)
const io = require('socket.io')
const socket = io(http);
const Fishes = require("./models/FishSchema");
const connect = require("./db");

let port = 3333;

app.use(cors())
app.use('/', routes)



socket.on('connection', async (socket) => {
    console.log('user connected');
    socket.emit('fishList', await Fishes.find({}))

    socket.on('createFish', (data) => {
        console.log('createFish: #',data);

        connect.then( async (db) => {
            let fish = new Fishes(data)
            fish.save().then( async(res) => {
                socket.emit('fishList', await Fishes.find({}))
            })
        })

        // socket.emit('fishList', await Fishes.find({}))
    })
});//wire up the server to listen to our port 500
http.listen(port, () => {
    console.log('connected to port: '+ port)
});
