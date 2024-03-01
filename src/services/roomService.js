const { ObjectId } = require("mongodb");
const Room = require("../models/room.js");

exports.getRooms = async () => {
  return await Room.find();
};

exports.createRoom = async (room) => {
  room.owner = new ObjectId()
  let newRoom = new Room(room);
  let error = newRoom.validateSync()
  if (error){
    return {
      errorFlag: true,
      error: {
        name: error.name,
        message: error.message
      },
      response: null
    }
  }
  
  let response = await newRoom.save()
  return {
    errorFlag: false, 
    error: null,
    response: response
  }
};
