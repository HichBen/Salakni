const express = require('express');
const router = express.Router();
const providersController = require('../controllers/providers');

/**
 * GET
 */
router.get('/:provider_id', providersController.getProvider);

/**
 * POST
 */
router.post('/', providersController.postProvider);

/**
 * PUT
 */
router.put('/:provider_id', providersController.putProvider);

/**
 * DELETE
 */
router.delete('/:provider_id', providersController.deleteProvider);


module.exports = router;

