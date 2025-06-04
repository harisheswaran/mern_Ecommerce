const mongoose = require('mongoose');

const connectDB =  () => {
    mongoose.connect((process.env.DB_URL)).then(()=>{
        console.log("Db connected")
    })
}; 

module.exports = connectDB;
 