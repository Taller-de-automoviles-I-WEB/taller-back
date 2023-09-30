const userService = require('../services/user.services');
const handleHttp = require('../utils/handle.logs')

module.exports = {
    createUser: async (req, res) => {
        try {

            const { user, isCreated } = await userService.insertUser(req.body);

            if (!user) return res.status(500).json({ message: 'Internal server error' });


            isCreated ?
                res.status(201).json(user) :
                res.status(400).json({ message: 'Username or email already exist' });

        } catch (error) {

            handleHttp.errorHandler(error, req, res);

        }
    },
    registerClient: async (req, res) => {
        try {
            const { user, isCreated } = await userService.registerClient(req.body);

            if (!user) return res.status(500).json({ message: 'Internal server error' });


            isCreated ?
                res.status(201).json(user) :
                res.status(400).json({ message: 'Username or email already exist' });
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
    updateUser: async (req, res) => {
        try {
            const {userExist, user} = await userService.updateUser(req.body);

            if (!user) return res.status(500).json({ message: 'Internal server error' });

            !userExist ? 
                res.status(200).json(user) : 
                res.status(400).json({ message: 'Username or email already exist' });

        } catch (error) {

            handleHttp.errorHandler(error, req, res);

        }
    },
    getUsers: async (req, res) => {
        try {
            const users = await userService.getUsers();
            res.status(200).json(users);
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
    getUserById: async (req, res) => {
        try {
            const user = await userService.getUserById(req.params);
            res.status(200).json(user);
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
    getUsersByAny: async (req, res) => {
        try {
            const users = await userService.getUsersByAny(req.params);
            res.status(200).json(users);
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    }
}