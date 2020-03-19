const router = require('express').Router();

const Characters = require('./character-model')

router.get('/', (req,res) => {
    res.status(200).json({ message: "Yep, this works too"})
})



module.exports = router;