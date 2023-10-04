const handleHttp = require('../utils/handle.logs');
const groupService = require('../services/group.services');

module.exports = {
    createGroup: async (req, res) => {
        try {
            const { group, isCreated} = await groupService.insertGroup(req.body);

            if(!group) return res.status(500).json({ message: 'Internal server error' });

            isCreated ? 
                res.status(200).json(group) :
                res.status(400).json({ message: 'Group already exist' });
        } catch (error) {
            handleHttp.errorHandler(error)
        }
    },
    updateGroup: async (req, res) => {
        try {
            const { group, groupExist } = await groupService.updateGroup(req.body);
            
            if (!group) return res.status(500).json({ message: 'Internal server error' });

            !groupExist ? 
                res.status(200).json(group) : 
                res.status(400).json({ message: 'Group already exist' });
        } catch (error) {
            handleHttp.errorHandler(error)
        }
    },
    getGroups: async (req, res) => {
        try {
            const groups = await groupService.getGroups();
            return res.status(200).json(groups);
        } catch (error) {
            handleHttp.errorHandler(error)
        }
    },
    getByName: async (req, res) => {
        try {
            const groups = await groupService.getByName(req.params);
            res.status(200).json(groups);
        } catch (error) {
            handleHttp.errorHandler(error)
        }
    },
    getById: async (req, res) => {
        try {
            const group = await groupService.getById(req.params);
            group ?
                res.status(200).json(group) :
                res.status(404).json({ message: 'Group not found' });
        } catch (error) {
            handleHttp.errorHandler(error)
        }
    },
};