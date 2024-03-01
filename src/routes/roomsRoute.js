const express = require('express')
const router = express.Router()
const roomController = require("../controllers/roomController");

router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

router.get('/', roomController.getRooms)
router.post('/', roomController.createRoom)

module.exports = router