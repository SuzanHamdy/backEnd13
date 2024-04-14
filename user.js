
const express = require('express')
const User = require('../model/user')
const router = express.Router()
 router.post('/users' ,(req , res) =>{
    console.log(req.body)
   const user = new User(req.body)
  user.save()
  .then((user) => { res.status(200).send(user)})
  .catch((error) => { res.status(400).send(error)})

 })
     router.get('/users' ,(req , res) => {
      User.find({})
      .then((user) =>{ res.status(200).send(user)})
      .catch((error) => {res.status(500).send(error)})
     })

     router.get('/users/:id' ,(req , res) => {
      const _id = req.params.id
      User.findById(_id)
      .then((user) =>{
     if (!user) {
      return   res.status(404).send('unable to find user')
     }
     res.status(200).send(user)

      })
      .catch((error) => { res.status(500).send(error)})
     })
////////////////////////////////////////////
//patch
router.patch('/users/:id' , async(req ,res) =>{
   try{
      const _id = req.params.id
      const user = await User.findByIdAndUpdate(_id , req.body ,{
         new : true ,
         runValidators : true
      })
      if (!user) {
         return   res.status(404).send('no user founded')
        }
        res.status(200).send(user)
   }
   catch(error){ res.status(500).send(error)}
})
// //////////////////////////////////////////
// //delete
router.delete('/users/:id' , async(req , res) =>{
   try{
      const _id = req.params.id
      const user =await User.findByIdAndDelete(_id)
      if (!user) {
         return res.status(404).send('no user founded')
      }
      res.status(200).send(user)
   }
   catch(e){ res.status(500).send(e)}
})




module.exports = router



