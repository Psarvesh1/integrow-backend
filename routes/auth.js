const router = require('express').Router()
const User = require('../models/user')

router.post('/register', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    try{
        const userSave = await user.save()
        res.send(userSave)
    }
    catch(err){
        res.status(400).send(err)
    }
})

module.exports = router