const handleHttp = require('../utils/handle.logs');
const db = require('../database/models');
const { Op } = require('sequelize');

module.exports = {
    insertGroup: async ({ name }) => {
        try {
            const [group, isCreated] = await db.Group.findOrCreate({
                where: {
                    name
                },
                defaults: {
                    name
                }
            });
            return {
                group,
                isCreated
            };
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
    updateGroup: async ({ groupID, name }) => {
        try {
            const group = await db.Group.findOne({
                where: {
                    name,
                    groupID: {
                        [Op.ne]: groupID
                    }
                }
            });
            if(group) return {
                groupExist: true,
                group
            };
            await db.Group.update({name}, {
                where: {
                    groupID
                }
            });
            const updateGroup = await db.Group.findOne({
                where: {
                    groupID
                }
            });
            return {
                groupExist: false,
                group: updateGroup
            };
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
    getGroups: async () => {
        try {
            const groups = await db.Group.findAll();
            return groups;
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
    getByName: async ({ name }) => {
        try {
            const groups = await db.Group.findAll({
                where: {
                    name: {
                        [Op.like]: `%${name}%`
                    }
                }
            });
            return groups;
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
    getById: async ({ groupID }) => {
        try {
            const group = await db.Group.findOne({
                where: {
                    groupID
                }
            });
            return group;
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
};