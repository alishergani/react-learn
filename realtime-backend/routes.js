const express = require('express');
const router = express.Router();
const uuid = require('uuid')

const Fishes = require("./models/FishSchema");
const connect = require("./db");
router.get('/fishlist', async (req, res) => {
    let fishes = await Fishes.find({})
    res.json(fishes)
})


router.post('/auth', (req, res) => {
        console.log(req.body)
        res.json(req.body)
  

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
    }
);



module.exports = router;