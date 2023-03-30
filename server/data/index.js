import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const events = [
  {
    picturePath: "p3.jpeg",
    eventTitle: "test pls work",
    date: "String",
    eventCost: "paid",
    eventLocation: "tondo",
  },
  {
    picturePath: "p3.jpeg",
    eventTitle: "please",
    date: "String",
    eventCost: "free",
    eventLocation: "edi sa puso mo",
  },
];