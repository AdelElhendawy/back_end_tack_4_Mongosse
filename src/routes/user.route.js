//* الطريق بقا
//* API          (post-get-put/push-delete)
//* End Point

const express = require("express")
const User = require("../models/user.models")
const { default: mongoose } = require("mongoose")
const router = express.Router()


router.post("/register" , async(req , res) =>{
    try {
        const user = new User(req.body)
        await user.save()
        res.status(201).send({message : "Created Account"})
        // console.log(req.body)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})


router.get("/getUser" , async(req , res) =>{  //? هيقرالي كل الداتااا
    try {
        const user = await User.find({})
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})


router.get("/getOne/:id" , async(req , res) =>{
    try {
        const id = req.params.id
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).send({message : "invalid input"})
        }
        const getOne = await User.findById(id)
        if(!getOne) return res.status(404).send({message : "user in not found"})
        res.status(200).send(getOne)
    } catch (error) {
        res.status(500).send(error)
    }
})

// * //////////////............التعديل..........///////////////////
router.patch("/update/:id" , async(req , res) =>{
    try {
        const id = req.params.id
        const update = await User.findByIdAndUpdate(id , req.body ,{
            returnDocument : "after",
            runValidators : true
        })
        if(!update) return res.status(404).send({message : "user in not found"})
            res.status(200).send(update)
    } catch (error) {
        res.status(500).send(error)
    }
})


//* ////////////......................Delete الحزف......///////////
router.delete("/deleteOne/:id" , async(req , res) =>{
    try {
        const id = req.params.id
        const deleteOne = await User.findByIdAndDelete(id)
        if(!deleteOne) return res.status(404).send({message : "user in not found"})
            res.status(200).send({message : "Account deleted!"})
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router