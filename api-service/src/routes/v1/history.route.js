const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { historyValidation } = require('../../validations');
const { historyController } = require('../../controllers');

const router = express.Router();

router.route('/').get(auth('getHistories'), validate(historyValidation.getHistories), historyController.getHistories);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: History
 *   description: History management and retrieval
 */

/**
 * @swagger
 * /history:
 *   get:
 *     summary: Get histories
 *     description: Should pass an existing stock name.
 *     tags: [History]
 *     security:
 *       - bearerAuth: []
*     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of searches
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/History'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
