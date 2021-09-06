var express = require('express');
const ConfigController = require('../controllers/configurateur');
var router = express.Router();

/* GET configurator listing. */
router.get('/', async (req, res) => {
    try{
        const response = await ConfigController.getAllConfigs();
        res.status(response.code).send(response.data);
    }catch(error){
        res.status(500).send(error);
    }
});

/* GET configurator by id. */
router.get('/:id', async (req, res) => {
    try{
        const id = req.params.id.toString();
        const response = await ConfigController.getConfigById(id);
        res.status(response.code).send(response.data);
    }catch(error){
        res.status(500).send(error);
    }
});

// Create new Configurateur
router.post('/', async (req, res) => {
    try {
        const response = await ConfigController.createConfig(req, res);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update configurateur
router.patch('/:id', async (req, res) => {
    try {
        const id = req.params.id.toString();
        const response = await ConfigController.updateConfigById(id, req);
        res.status(response.code).send(response.data);
    } catch (error) {
        res.status(500).send(error)
    }
});

// Delete configurateur
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id.toString();
        const response = await ConfigController.deleteConfigById(id);
        res.status(response.code).send(response.data);
    } catch (error) {
        res.status(500).send(error)
    }
});

module.exports = router;