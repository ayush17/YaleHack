const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema(
  {
    roomId: {
      type: Number,
      required: true,
    },
    ownerId: {
      type: Number,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    maxCount: {
      type: Number,
      default: 8,
    },
    participants: [
      {
        userId: {
          type: Number,
          required: true,
        },
        username: {
          type: String,
          required: true,
        },
      },
    ],
    currentLocation: {
      latitude: {
        type: Number,
        required: true,
      },
      longitude: {
        type: Number,
        required: true,
      },
    },
    destinationLocation: {
      latitude: {
        type: Number,
        required: true,
      },
      longitude: {
        type: Number,
        required: true,
      },
    },
    time: {
      type: Date,
      required: true,
    },
    description: String,
  },
  { timestamps: { createdAt: "created_at" } }
);

const Room = mongoose.model("Room", RoomSchema);

module.exports = Room;
