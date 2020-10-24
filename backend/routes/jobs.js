const router = require("express").Router();
let Job = require("../models/job.model");

router.route("/").get((req, res) => {
  Exercise.find()
    .then((jobs) => res.json(jobs))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/jobs/add").post((req, res) => {
  const company = req.body.company;
  const logo = req.body.logo;
  const jobNew = req.body.jobNew;
  const featured = req.body.featured;
  const position = req.body.position;
  const role = req.body.role;
  const level = req.body.level;
  const postedAt = req.body.postedAt;
  const contract = req.body.contract;
  const location = req.body.location;
  const languages = req.body.languages;
  const tools = req.body.tools;

  const newJob = new Job({
    company,
    logo,
    jobNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  });

  newJob
    .save()
    .then(() => res.json("Job added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
