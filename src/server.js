// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));


//* هتنزل
//? mongoose
//? express

const express = require("express")
const { connectDB } = require("./db/mongoose")
const app = express()
app.use(express.json())


connectDB()  //? دي اللي عملها استخراج في المنجووس
//? هنادي علي الروت الاندبوينت 
// const registerRouter = require("./routes/user.route")
// app.use(registerRouter)  //? دي اللي بتعرض

app.use(require("./routes/user.route")) //? دي الطريقه التانيه للعرض

const port = process.env.PORT || 5000
app.listen(port , () =>{
    console.log(`server is running on port >>> ${port}`)
})