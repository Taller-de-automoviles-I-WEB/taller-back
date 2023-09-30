const db = require('../database/models');
const passwordHandler = require('../utils/handle.password.encrypt')
const handleHttp = require('../utils/handle.logs')
const tokenHandler = require('../utils/handle.jwt');
const { Op } = require('sequelize');

module.exports = {
    login: async (identifier, password) => {
        try {

            let user = await db.User.findOne({
                where: {
                    [Op.or]: [{ username: identifier }, { email: identifier }]
                },
                include: [
                    {
                        model: db.Role
                    }
                ],
                attributes: {
                    exclude: ['roleID']
                }
            });
            if (!user) return 'El usuario no existe';
            user = user.toJSON();
            const passwordHash = user.password;
            const isPassCorrect = await passwordHandler.comparePassword(password, passwordHash);
            if (!isPassCorrect) return 'Clave incorrecta';

            delete user.password;
            const token = await tokenHandler.generateToken(user);
            const data = {
                data: user,
                token: token
            }

            return data

        } catch (error) {
            console.log(error)
            handleHttp.errorHandler(error);

        }
    }
}