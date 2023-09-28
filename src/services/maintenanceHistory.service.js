const db = require("../database/models");
const handleHttp = require("../utils/handle.logs");

const getMaintenanceHistoryByOrderId = async (id) =>{
    try {
        const history = await db.MaintenanceHistory.findOne({
            where: {
              OrderId: id,
            },
          });
        return history
    } catch (error) {
        handleHttp.errorHandler(error);
        throw error;
    }
}

const createMaintenanceHistory = async (data) => {
    try {
        const newHistory = db.MaintenanceHistory.create(data)
        return newHistory;
    } catch (error) {
        handleHttp.errorHandler(error);
    }
}

module.exports = {getMaintenanceHistoryByOrderId, createMaintenanceHistory}