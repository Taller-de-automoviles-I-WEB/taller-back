const db = require('../database/models');
const passwordHandler = require('../utils/handle.password.encrypt')
const handleHttp = require('../utils/handle.logs')
const tokenHandler = require('../utils/handle.jwt');
const { Op } = require('sequelize');
const handlePasswordEncrypt = require('../utils/handle.password.encrypt');

module.exports = {
  insertUser: async ({ roleID, fullName, address, username, password, email, industry, phone }) => {
    try {
      password = await passwordHandler.hashPassword(password);
      const [user, isCreated] = await db.User.findOrCreate({
        where: {
          [Op.or]: [{ username: username }, { email: email }]
        },
        include: [
          {
            model: db.Role
          },
        ],
        attributes: {
          exclude: ['roleID', 'password']
        },
        defaults: {
          roleID,
          fullName,
          address,
          username,
          password,
          email,
          industry,
          phone,
        }
      });
      return {
        user,
        isCreated
      }
    } catch (error) {
      handleHttp.errorHandler(error);
    }
  },
  registerClient: async ({ fullName, address, username, password, email, industry, phone }) => {
    try {

      const [role, isCreatedRole] = await db.Role.findOrCreate({
        where: {
          name: 'client'
        }
      });
      if (!role) return role;

      password = await passwordHandler.hashPassword(password);
      const [user, isCreatedUser] = await db.User.findOrCreate({
        where: {
          [Op.or]: [{ username: username }, { email: email }]
        },
        include: [
          {
            model: db.Role
          },
        ],
        attributes: {
          exclude: ['roleID', 'password']
        },
        defaults: {
          roleID: role.toJSON().roleID,
          fullName,
          address,
          username,
          password,
          email,
          industry,
          phone,
        }
      });
      
      return {
        user,
        isCreated: isCreatedUser
      }
    } catch (error) {
      handleHttp.errorHandler(error);
    }
  },
  updateUser: async ({ userID, roleID, fullName, address, username, password, email, industry, phone }) => {
    try {
      password = await handlePasswordEncrypt.hashPassword(password);
      const user = await db.User.findOne({
        where: {
          [Op.or]: [{username}, {email}],
          userID: {
            [Op.ne] : userID
          }
        }
      });

      if(user) return {
        userExist: true,
        user
      };

      await db.User.update({
        roleID,
        fullName,
        address,
        username,
        password,
        email,
        industry,
        phone
      }, {
        where: {
          userID
        },
      });
      const updatedUser = await db.User.findOne({
        where: {
          userID
        },
        include: [
          {
            model: db.Role
          }
        ],
        attributes: {
          exclude: ['roleID', 'password'],
        }
      });
      return {
        userExist: false,
        user: updatedUser
      };
    } catch (error) {
      handleHttp.errorHandler(error);
    }
  },
  getUsers: async () => {
    try {
      const users = await db.User.findAll({
        include: [
          {
            model: db.Role
          },
        ],
        attributes: {
          exclude: ['roleID', 'password']
        }
      });
      return users;
    } catch (error) {
      handleHttp.errorHandler(error);
    }
  },
  getUserById: async ({ userID }) => {
    try {
      const user = await db.User.findOne({
        where: {
          userID
        },
        include: [
          {
            model: db.Role
          },
        ],
        attributes: {
          exclude: ['roleID', 'password']
        }
      });
      return user;
    } catch (error) {
      handleHttp.errorHandler(error);
    }
  },
  getUsersByAny: async ({ searchTerm }) => { //Get user by email,username,fullname
    try {
      const users = await db.User.findAll({
        where: {
          [Op.or]: [
            {
              username: {
                [Op.like]: `%${searchTerm}%`
              }
            },
            {
              email: {
                [Op.like]: `%${searchTerm}%`
              }
            },
            {
              fullName: {
                [Op.like]: `%${searchTerm}%`
              }
            }
          ]
        },
        include: [
          {
            model: db.Role
          },
        ],
        attributes: {
          exclude: ['roleID', 'password']
        }
      });
      return users;
    } catch (error) {
      handleHttp.errorHandler(error);
    }
  }
}