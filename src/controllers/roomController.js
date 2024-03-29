// Import any required services or models here
const roomService = require("../services/roomService");

// Define your controller methods
exports.getRooms = async (req, res) => {
  try {
    const examples = await roomService.getRooms();
    res.json(examples);
  } catch (error) {
    res.status(500).json({ error: `Internal Server Error:${error}` });
  }
};

exports.createRoom = async (req, res) => {
  try {
    let room = req.body.room;
    const newExample = await roomService.createRoom(room);
    res.json(newExample);
  } catch (error) {
    res.status(500).json({ error: `Internal Server Error:${error}` });
  }
};

exports.getRoomsByOwnerId = async (req, res) => {
  try {
    const ownerId = req.params.ownerId;
    const rooms = await roomService.getRoomByOwnerId(ownerId);
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ error: `Internal Server Error:${error}` });
  }
};
