const router = require("express").Router();
const { Student } = require("../models/student");

router.get("/",(req,res)=>{
  res.end("this is from create");
});

router.post("/", async (req, res) => {
  try {
    //console.log(req.body);
    await new Student({ ...req.body })
      .save()
      .then((savedData) => {
        res.status(201).send("Student Registered successfully");
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send("Internal server error");
      });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});
module.exports = router;
