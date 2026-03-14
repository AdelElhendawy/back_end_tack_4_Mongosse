const mongoose = require("mongoose")

var url = "mongodb://127.0.0.1:27017/test"
exports.connectDB = async() =>{
    try {
        await mongoose.connect(url)
        console.log("connection DB successful 🟢🟢🟢")
    } catch (error) {
        console.log(`error in connected DB | ${error}`)
        process.exit(1)
    }
}