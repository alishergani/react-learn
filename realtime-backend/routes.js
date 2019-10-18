const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Schema = mongoose.Schema;

const fishesScheme = new Schema({
    name: String,
    image: String,
    desc: String,
    price: Number,
    status: String
});
const Fishes = mongoose.model("Fishes", fishesScheme);

router.get('/fishlist', async (req, res) => {
    let fishes = await Fishes.find({})
    res.json(fishes)
})


router.post('/addFish', (req, res) => {
    console.log(req);
  

        // const Fishes = mongoose.model("Fishes", fishesScheme);

        // const fish = new Fishes({
        //     name: "Pacific Halibut",
        //     image: "/images/hali.jpg",
        //     desc: "Everyone’s favorite white fish. We will cut it to the size you need and ship it.",
        //     price: 1724,
        //     status: "available"
        // });


        // fish.save(function(err){
        //     // mongoose.disconnect();  // отключение от базы данных
            
        //     if(err) return console.log(err);
        //     console.log("Сохранен объект", fish);
        // });
        res.send("Redirect")
    }
);



module.exports = router;