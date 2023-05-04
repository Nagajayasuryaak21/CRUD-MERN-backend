const router = require("express").Router();
const { Student } = require("../models/student");

router.post("/get/one", async (req, res) => {
  try {
    const id = req.body._id;
    Student.findOne({ _id: id })
      .then((data) => {
        console.log(data);
        res.status(200).send(data);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send({ message: "something went wrong" });
      });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});
router.post("/get/all", async (req, res) => {
  try {
    Student.find({}, null, { timeout: 30000 })
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send({ message: "something went wrong" });
      });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});
module.exports = router;
