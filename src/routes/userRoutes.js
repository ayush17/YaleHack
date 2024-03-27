const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

/**
 * @swagger
 * /api/users/{userId}:
 *   get:
 *     summary: Get user details by ID
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 */
router.get("/login", userController.getUserById);
router.get("/signup", userController.createUser);

/**
 * @swagger
 * /api/users:
 *  post:
 *   summary: Create a new user
 *  requestBody:
 *   required: true
 *  content:
 *  application/json:
 *  schema:
 *  $ref: '#/components/schemas/User'
 * responses:
 * 201:
 * description: User created
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/User'
 */
router.post("/", userController.createUser);

module.exports = router;
