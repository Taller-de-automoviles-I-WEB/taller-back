const {Router} = require('express')
const {getProviders, createProvider, getProviderByEmail, getProviderById, updateProvider, deletedProviderById, deleteAllProviders} = require('../controllers/providers.controller')
const validateData = require('../middlewares/dataValidator.js');

const router = Router()

router.get('/', async (req, res) => {
    try {
        await getProviders(req, res)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal server error' });
    }
})

router.get('/email/:email', async (req, res) => {
    try {
        await getProviderByEmail(req, res)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal server error' });
    }
})

router.get('/id/:id', async (req, res) => {
    try {
        await getProviderById(req, res)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal server error' });
    }
})

router.post('/',validateData.createProviders, async (req, res) => {
    try {
        console.log(req.body)
        await createProvider(req, res)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal server error' });
    }
})

router.put('/:id',validateData.updateProviders, async (req, res) => {
    try {
        await updateProvider(req, res)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal server error' });
    }
})

router.delete('/id/:id', async (req, res) => {
    try {
        await deletedProviderById(req, res)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal server error' });
    }
})

router.delete('/all', async (req, res) => {
    try {
        await deleteAllProviders(req, res);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports= router
