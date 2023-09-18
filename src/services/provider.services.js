const db = require('../database/models');
const passwordHandler = require('../utils/handle.password.encrypt')
const handleHttp = require('../utils/handle.logs')

const getProvidersService = async () =>{
    try {
        const providers = await db.Provider.findAll()
        return providers
    } catch (error) {
        handleHttp.errorHandler(error);
        throw error
    }
}

const getProviderByEmailService = async (email) => {
    try {
        const provider = await db.Provider.findOne({
            where: {
              email: email 
            },
            attributes: {
                exclude: ['password']
              }
          });
        return provider
    } catch (error) {
        handleHttp.errorHandler(error);
        throw error
    }
}

const getProviderByIdService = async (id) => {
    try {
        const provider = await db.Provider.findOne({
            where: {
              id: id 
            }
          });
        return provider
    } catch (error) {
        handleHttp.errorHandler(error);
        throw error
    }
}

const createProviderService = async (body) =>{
    const t = await db.sequelize.transaction(); 
    try {
        const newProvider = body
        newProvider.password = await passwordHandler.hashPassword(newProvider.password)
        const createProvider = await db.Provider.create(newProvider, { transaction: t})
        await t.commit();
        return createProvider
    } catch (error) {
        await t.rollback();
        handleHttp.errorHandler(error);
        throw error
    }
}

const updateProviderService = async (id, updatedData) => {
    const t = await db.sequelize.transaction();
    try {
      const existingProvider = await db.Provider.findByPk(id);
      if (!existingProvider) {
        throw new Error('Provider not found');
      }
      if(updatedData.password){
        updatedData.password = await passwordHandler.hashPassword(updatedData.password)
      }
      const updatedProvider = await existingProvider.update(updatedData, {
        transaction: t
      });
  
      await t.commit();
      return updatedProvider;
    } catch (error) {
      await t.rollback();
      handleHttp.errorHandler(error);
      throw error;
    }
  };

  const deleteProviderByIdService = async (id) =>{
    const t = await db.sequelize.transaction();
    try {
        const existingProvider = await db.Provider.findByPk(id);
        if(!existingProvider){
            throw new Error('Provider not found');
        }
        const deletedCount = await db.Provider.destroy({
            where: {
              id: id,
            },
          }, { transaction: t});
          await t.commit();
          return deletedCount
    } catch (error) {
        await t.rollback();
        handleHttp.errorHandler(error);
        throw error;
    }
  }

  const deleteAllProvidersService = async () => {
    const t = await db.sequelize.transaction();

    try {
        const deletedCount = await db.Provider.destroy({
            where: {},
            transaction: t,
        });
        await t.commit();
        return deletedCount;
    } catch (error) {
        await t.rollback();
        handleHttp.errorHandler(error);
        throw error;
    }
};

module.exports = {getProvidersService, createProviderService, getProviderByEmailService, getProviderByIdService, updateProviderService, deleteProviderByIdService, deleteAllProvidersService}

