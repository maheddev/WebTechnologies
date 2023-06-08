const router = require('express').Router();
const teacherSchema = require('../Models/Teacher');

router.get("/get", async (req, res) => {
  try {
    let data;
    data = await teacherSchema.find();
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
});

router.get("/getItems/:id", async (req, res) => {
  let data;
  const id = req.params.id;

  try {
    data = await teacherSchema.findById(id);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
});


router.post("/add", async (req, res) => {
  try {
    const data = req.body;
    const newTeacher = new teacherSchema(data);
    await newTeacher.save().then(() => {
      res.status(200).json({ message: "Item added successfully" });
    });
  } catch (error) {
    console.log(error);
  }
});

router.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  const { name,
    qualification,
    expertise } = req.body;
  let data;
  try {
    data = await teacherSchema.findByIdAndUpdate(id, {
      name,
      qualification,
      expertise,
    });
    await data.save().then(() => {
      res.send(200).json({ message: "update successful" });
    });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await teacher.findByIdAndDelete(id).then(() => {
      res.send(200).json({ message: "Deletion Success" });
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;