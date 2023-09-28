const {getMaintenanceHistoryByOrderId, createMaintenanceHistory} = require('../services/maintenanceHistory.service')
const handleHttp = require("../utils/handle.logs");

const getHistoryByOrderId = async (req, res) =>{
    try {
        const history = await getMaintenanceHistoryByOrderId(parseInt(req.params.id))
        if (history) {
            res.status(200).json({ provider, message: "Maintenance History success found." });
          } else {
            return res.status(200).json({ message: "Maintenance History no found." });
          }
    } catch (error) {
        handleHttp.errorHandler(error);
        throw error;
    }
}

const createHistory = async (req, res) => {
    try {
        const newHistory = await createMaintenanceHistory(req.body)
        res.status(200).json({ newHistory, message: "History create success" });
    } catch (error) {
        handleHttp.errorHandler(error);
        res.status(500).json({ message: "Internal server error" });
        console.log(error);
    }
}

module.exports = {getHistoryByOrderId, createHistory}
