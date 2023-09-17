const {getProvidersService, createProviderService, getProviderByEmailService, getProviderByIdService, updateProviderService, deleteProviderByIdService, deleteAllProvidersService} = require('../services/provider.services')
const handleHttp = require('../utils/handle.logs')

const getProviders = async (req, res) =>{
    try {
        const providers = await getProvidersService()
        if(providers?.length > 0 ){
            res.status(200).json({ providers, message: 'Providers success found.' });
        }else{
            return res.status(200).json({ message: 'No providers found.' });
        }
    } catch (error) {
        handleHttp.errorHandler(error);
        throw error
    }
}

const getProviderByEmail = async (req, res) => {
    try {
        const provider = await getProviderByEmailService(req.params.email)
        if(provider){
            res.status(200).json({ provider, message: 'Provider success found.' });
        }else{
            return res.status(200).json({ message: 'Provider no found.' });
        }
    } catch (error) {
        throw error
    }
}

const getProviderById = async (req, res) => {
    try {
        const provider = await getProviderByIdService(parseInt(req.params.id))
        if(provider){
            res.status(200).json({ provider, message: 'Provider success found.' });
        }else{
            return res.status(200).json({ message: 'Provider no found.' });
        }
    } catch (error) {
        throw error
    }
}


const createProvider = async (req, res) =>{
    try {
        const newProvider = await createProviderService(req.body)
        res.status(200).json({ newProvider, message: 'Provider create success' });
    } catch (error) {
        handleHttp.errorHandler(error);
        if(error.name === 'SequelizeUniqueConstraintError'){
            res.status(409).json({message: 'Email already in use.' });
        }else{
            throw error
        }
    }
}

const updateProvider = async (req, res) =>{
    try {
        const newProvider = await updateProviderService(parseInt(req.params.id), req.body)
        res.status(200).json({ newProvider, message: 'Provider update success' });
    } catch (error) {
        handleHttp.errorHandler(error);
        if(error.name === 'SequelizeUniqueConstraintError'){
            res.status(409).json({message: 'Email already in use.' });
        }else if(error.message === 'Provider not found') {
            res.status(404).json({ message: 'Provider not found.' });
        }
        throw error
    }
}

const deletedProviderById = async (req, res) => {
    try {
        const deletedCount = await deleteProviderByIdService(parseInt(req.params.id));
        if (deletedCount === 1) {
            res.status(200).json({ message: 'Provider successfully deleted.' });
        }
    } catch (error) {
        if (error.message === 'Provider not found') {
            res.status(404).json({ message: 'Provider not found.' });
        } else {
            res.status(500).json({ message: 'Internal server error' });
            console.log(error)
        }
    }
}

const deleteAllProviders = async (req, res) => {
    try {
        const deletedCount = await deleteAllProvidersService();

        if (deletedCount > 0) {
            res.status(200).json({ message: `${deletedCount} providers successfully deleted.` });
        } else {
            res.status(200).json({ message: 'No providers found to delete.' });
        }
    } catch (error) {
        handleHttp.errorHandler(error);
        throw error
    }
};

module.exports = {getProviders, createProvider, getProviderByEmail, getProviderById, updateProvider, deletedProviderById, deleteAllProviders}