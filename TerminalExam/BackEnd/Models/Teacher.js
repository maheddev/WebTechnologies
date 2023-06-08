const mongoose = require("mongoose");
const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  qualification: { type: String, required: true },
  expertise: { type: String, required: true },
});

module.exports = new mongoose.model("TeacherSchema", teacherSchema);

