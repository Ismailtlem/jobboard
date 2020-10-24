const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const jobSchema = new Schema({
  company: String,
  logo: String,
  jobNew: Boolean,
  featured: Boolean,
  position: String,
  role: String,
  level: String,
  postedAt: String,
  contract: String,
  location: String,
  languages: [String],
  tools: [String],
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
