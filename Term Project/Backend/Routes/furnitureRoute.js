const router = require("express").Router();
const furnitureSchema = require("../Models/furniture");

router.post("/add", async (req, res) => {
  try {
    const data = req.body;
    const newItem = new furnitureSchema(data);
    await newItem.save().then(() => {
      res.status(200).json({ message: "Item added successfully" });
    });
  } catch (error) {
    console.log(error);
  }
});

// Normal Get request
router.get("/getItems", async (req, res) => {
  try {
    let data;
    data = await furnitureSchema.find();
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
});

// Get Request using ID
router.get("/getItems/:id", async (req, res) => {
  let data;
  const id = req.params.id;

  try {
    data = await furnitureSchema.findById(id);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
});

//Update the Data by Id
router.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  const { title, description, image, price, quantity } = req.body;
  let data;
  try {
    data = await furnitureSchema.findByIdAndUpdate(id, {
      title,
      description,
      image,
      price,
      quantity,
    });
    await data.save().then(() => {
      res.send(200).json({ message: "update successful" });
    });
  } catch (error) {
    console.log(error);
  }
});

// Delete a product
router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await furnitureSchema.findByIdAndDelete(id).then(() => {
      res.send(200).json({ message: "Deletion Success" });
    });
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
