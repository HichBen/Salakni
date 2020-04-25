/**
 * @author: El Mehdi Moumni
 */


const express = require('express');
const router = express.Router();
const clientsController = require('../controllers/clients');

/**
 * GET
 */
router.get('/', clientsController.getAllClients);

router.get('/:client_id', clientsController.getOneClient);

/**
 * POST
 */
router.post('/', clientsController.postClient);

/**
 * PUT
 */
router.put('/:client_id', clientsController.putClient);

/**
 * DELETE
 */
router.delete('/:client_id', clientsController.deleteClient);


module.exports = router;

