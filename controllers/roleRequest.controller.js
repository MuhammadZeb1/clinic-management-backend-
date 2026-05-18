import RoleRequest from "../models/RoleRequest.js";
import User from "../models/User.js";

// ================= APPLY FOR ROLE =================
export const applyRole = async (req, res) => {
  try {

    const jId = req.user.id;
    console.log(jId)
    console.log("BODY:", req.body);

    const { userId, requestedRole } = req.body;

    if (!userId || !requestedRole) {
      return res.status(400).json({
        error: "userId and requestedRole are required"
      });
    }

    const request = await RoleRequest.create(req.body);

    res.status(201).json(request);
  } catch (err) {
    console.log("ERROR:", err); // 🔥 THIS WILL SHOW REAL ISSUE
    res.status(500).json({ error: err.message });
  }
};

// ================= GET ALL REQUESTS (ADMIN) =================
export const getRoleRequests = async (req, res) => {
  try {
    const requests = await RoleRequest.find()
      .populate("userId", "name email role");

    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ================= APPROVE REQUEST =================
export const approveRole = async (req, res) => {
  try {
    const request = await RoleRequest.findById(req.params.id);

    if (!request) {
      return res.status(404).json({ error: "Request not found" });
    }

    // update user role
    await User.findByIdAndUpdate(request.userId, {
      role: request.requestedRole,
    });

    request.status = "approved";
    await request.save();

    res.json({ message: "Role approved", request });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ================= REJECT REQUEST =================
export const rejectRole = async (req, res) => {
  try {
    const request = await RoleRequest.findByIdAndUpdate(
      req.params.id,
      { status: "rejected" },
      { new: true }
    );

    res.json({ message: "Role rejected", request });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};