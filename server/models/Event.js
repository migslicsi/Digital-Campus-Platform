import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
    {
        picturePath: String,
        eventTitle: String,
        date: String,
        eventCost: String,
        eventLocation: String,
    },
    { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);

export default Event;