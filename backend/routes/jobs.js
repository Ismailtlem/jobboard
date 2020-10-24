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
/*
router.route("/:id").get((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise
        .save()
        .then(() => res.json("Exercise updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

*/
module.exports = router;
