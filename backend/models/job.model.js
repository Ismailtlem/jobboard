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

/*
var testJob = new Job({
  company: "testCompany2",
  logo:
    "https://www.logodesign.net/logo/sea-swoosh-in-shape-of-letter-c-with-sun-4761ld.png",
  jobNew: true,
  featured: true,

  position: "Full stack developer",
  role: "Frontend",
  level: "Senior",
  postedAt: "4d ago",
  contract: "Fulltime",
  location: "Montreal",
  languages: ["HTML", "CSS", "JavaScript"],
  tools: [],
});

// save model to database
testJob.save(function (err, done) {
  if (err) return console.error(err);
  console.log("inserted successfully");
});
*/

module.exports = Job;
