import mongoose from "mongoose";

const threadSchema = new mongoose.Schema({
  text: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  community: { type: mongoose.Schema.Types.ObjectId, ref: "Community" },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  parentId: {
    type: String,
  },
  children: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Thread",
    },
  ],
});

// Initially 'mongoose.models.Thread' so it'll use threadSchema
// But from the second and further times 'mongoose.models.Thread' will be there in the DB.
const Thread = mongoose.models.Thread || mongoose.model("Thread", threadSchema);

export default Thread;
