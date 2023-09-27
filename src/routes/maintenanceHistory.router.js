const { Router } = require("express");
const {getHistoryByOrderId, createHistory} = require('../controllers/maintenanceHistory.controller');

const router = Router()

router.get('/:id',async (req, res) =>{
    try {
        await getHistoryByOrderId(req, res)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
})

router.post('/', async (req, res) =>{
    try {
        console.log(req.body)
        await createHistory(req, res)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
})

module.exports = router