const {Router} = require('express');

const router = Router();

router.get('/api', (req, res) =>{
    res.send('TALLER AUTOS API');
})

module.exports = router;