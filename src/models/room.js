const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

var RoomSchema = new mongoose.Schema(
  {
    owner: { type: ObjectId, ref: "Student" },
    name: {
      type: String,
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    maxCount: {
      type : Number,
      default: 8
    },
    currentCount: Number,
    location: {
      lat: Number,
      long: Number,
    },
    locationName: String,
    description: String,
  },
  { timestamps: { createdAt: "created_at" } }
);

const Room = (module.exports = mongoose.model("Room", RoomSchema));
