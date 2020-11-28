const mongoose = require("./index.js");



mongoose.Promise = global.Promise;

const UserShema = new mongoose.Schema({

    name: String,
    price: Number,
    date: String
});

var User = mongoose.model("User", UserShema);
// const delet = async (name) => {
//     try {
//         let data = await User.find()
//         //const data = await User.remove({name:'ahmed'});
//         console.log(data)
//     } catch (e) { console.log(e) }

// }
// delet('hamza')


module.exports = User;
















