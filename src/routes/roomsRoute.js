const express = require("express");
const router = express.Router();
const roomController = require("../controllers/roomController");

/**
 * @swagger
 * /api/rooms:
 *   get:
 *     summary: Get all rooms
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Room'
 *   post:
 *     summary: Create a new room
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Room'
 *     responses:
 *       201:
 *         description: Room created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Room'
 *
 * components:
 *   schemas:
 *     Room:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         description:
 *           type: string
 *         capacity:
 *           type: number
 */

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

router.get("/", roomController.getRooms);
router.post("/", roomController.createRoom);
router.get("/owner/:ownerId", roomController.getRoomsByOwnerId);

module.exports = router;
