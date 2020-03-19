const router = require('express').Router();

const Characters = require('./character-model');

router.get('/', (req, res) => {
    Characters.find()
        .then(character => {
            res.status(200).json(character);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: `${err}` });
        });
});

router.post('/', (req, res) => {
    const characterData = req.body
    Characters.add(characterData)
        .then(ids => {
            res.status(201).json({ created: ids[0] })
        })
        .catch(err => {
            res.status(500).json(`Failed to create because ${err}`)
        });
});

module.exports = router;
