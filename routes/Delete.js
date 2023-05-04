const router = require("express").Router();
const { Student } = require("../models/student");

router.post("/", async (req, res) => {
  try {
    const id = req.body._id;
    Student.findOneAndDelete({ _id: id })
      .then((data) => {
        res.status(200).send({ data: data, message: "Deleted successfully" });
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
