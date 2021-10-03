const router = require('express').Router()

router.post('/register', (req, res) => {
    res.send('user has been registered')
})

module.exports = router