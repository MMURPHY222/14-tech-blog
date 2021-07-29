const router = require('express').Router();
const { User } = require('../../models');

router.get('/', async (req,res) => {
    try {
        const userData = await User.findAll();
        // res.status(200).json(userData);
        res.render('homepage');

    } catch (err) {
        res.status.apply(400).json(err);
    }
})

module.exports = router;