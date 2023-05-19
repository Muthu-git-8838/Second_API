const express = require("express");
require("./db/conn");
require("dotenv").config();
const Traveller = require("./model/traveller");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// Post a traveller data
app.post("/travellers", async (req, res) => {
  try {
    const user = new Traveller(req.body);
    const PostData = await user.save();
    res
      .status(201)
      .send({ message: `User ${PostData.name} Added Successfully` });
  } catch (e) {
    res.status(400).send(e);
  }
});

//Get all Travellers Datum
app.get("/travellers", async (req, res) => {
  try {
    const travellerData = await Traveller.find();
    res.status(200).send(travellerData);
  } catch (e) {
    res.status(500).send(e);
  }
});

//Get a Traveller data by his/her id
app.get("/travellers/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const travellerData = await Traveller.findById(_id);
    if (!travellerData) {
      res.status(404).send({ error_message: "User NOT Found" });
    } else {
      res.status(200).send(travellerData);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

// Update a Traveller data by his/her id
app.patch("/travellers/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const travellerData = await Traveller.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    if (!travellerData) {
      res.status(404).send({ error_message: "User NOT Found" });
    } else res.status(200).send(travellerData);
  } catch (e) {
    res.status(500).send(e);
  }
});

//delete a traveller data by his/her id
app.delete("/travellers/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const travellerData = await Traveller.findByIdAndDelete(_id);
    if (!travellerData)
      res.status(404).send({ error_message: "User NOT Found" });
    else res.status(200).send({ message: "User data deleted Successfully" });
  } catch (e) {}
});

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
