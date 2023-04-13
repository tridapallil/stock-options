const express = require('express');
const auth = require('../../middlewares/auth');
const { statsController } = require('../../controllers');

const router = express.Router();

router.route('/').get(auth('getStats'), statsController.getStats);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Stats
 *   description: Stats management and retrieval
 */

/**
 * @swagger
 * /stats:
 *   get:
 *     summary: Get top stock searchs
 *     description: Should return top 5 most searched stocks
 *     tags: [Stats]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Stats'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
