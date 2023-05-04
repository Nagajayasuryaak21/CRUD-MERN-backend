const router = require("express").Router();
const { Student } = require("../models/student");

router.post("/", async (req, res) => {
  try {
    const id = req.body._id;
    console.log('update',req.body);
    Student.findOneAndUpdate({ _id: id }, req.body)
      .then((data) => {
        res.status(200).send({ data: data, message: "Updated successfully" });
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
