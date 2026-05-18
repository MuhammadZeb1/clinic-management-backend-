import mongoose from "mongoose";

const roleRequestSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    requestedRole: {
      type: String,
      enum: ["doctor", "receptionist"],
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },

    experience: String,
    specialization: String,
  },
  { timestamps: true }
);

export default mongoose.model("RoleRequest", roleRequestSchema);