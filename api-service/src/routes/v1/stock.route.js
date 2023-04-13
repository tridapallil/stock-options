const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { stockValidation } = require('../../validations');
const { stockController } = require('../../controllers');

const router = express.Router();

router.route('/').get(auth('getStocks'), validate(stockValidation.getStock), stockController.getStock);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Stock
 *   description: Stock management and retrieval
 */

/**
 * @swagger
 * /stock:
 *   get:
 *     summary: Get a stock
 *     description: Should pass an existing stock name.
 *     tags: [Stock]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         description: Stock symbol
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Stock'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
