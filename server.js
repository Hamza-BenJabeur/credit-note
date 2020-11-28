const express = require('express');
let app = express();
const db = require('./database/index.js')
port = 3000;
const bodyParser = require('body-parser');
const User = require('./database/User.js')
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('./client/dist'));

app.listen(port, () => {
    console.log("im litening to http://localhost:" + port)
})


app.get('/user', function (req, res) {
    User.find({}, (err, data) => {
        if (err) {
            console.log(err)
        }
        res.send(data)
        console.log(data)
    })

});
app.post('/user', function (req, res) {
    console.log(req.body);
    let user = new User(req.body);
    User.update({ name: req.body.name },
        { price: req.body.price, date: req.body.date, name: req.body.name },
        { upsert: true, setDefaultsOnInsert: true }).then(data => {
            res.send(data)
        }).catch(e => {
            res.send(e).status(400)
        })

})
app.post('/del',(req,res)=>{
    User.deleteOne({name : Object.keys(req.body)[0]}).catch((error , a , b)=>{ if(error) console.log(error , a , b)})
})



//


//
// var newpost = {
//     name: req.body.name,
//     price : req.body.price,
//     date: req.body.date,
//   };
//   console.log(req.body);
//   const newP = new User(newpost);
//   newP.save((err, result) => {
//     res.send(result);
//   });


