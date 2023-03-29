import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
    {
        picturePath: String,
        eventTitle: String,
        date: Date,
        eventCost: String,
        eventLocation: String,
    },
    { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);

export default Event;