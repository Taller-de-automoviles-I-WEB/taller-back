const handleHttp = require('../utils/handle.logs')

module.exports = (allowedRole) => (req, res, next) => {
    try {
        const user = req?.user?.payload;
        if(user && (user?.Role?.name?.toLowerCase() === allowedRole?.toLowerCase())){
            return next();
        }
        res.status(401).json({ message: 'Unauthorized' });
    } catch (error) {
        handleHttp.errorHandler(error)
    }
};