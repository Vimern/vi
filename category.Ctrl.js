
const categorymodel = require("../model/categorymodel");


exports.postroom = async (req, res) => {
  try {
    const newcategory = new Category({
      room1: req.body.room1,
      room2: req.body.room2,
      room3: req.body.room3,
      room4: req.body.room4,
    });
    await newcategory.save();
    res.status(201).send(newcategory);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getroom = async (req, res) => {
  try {
    const categories = await categorymodel.find();
    res.status(200).send(categories);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.patchroom = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!category) {
      return res.status(200).send();
    }
    res.send(category);
  } catch (error) {
    res.status(400).send(error);
  }
};


exports.deleteroom = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(200).send();
    }
    res.send(category);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.patch = async (req, res) => {
  const { room1 = true } = req.body;
  const { room2 = true } = req.body;
  const { room3 = true } = req.body;
  const { room4 = true } = req.body;
  try {
    activateCategory = await category.findByIdAndUpdate(
      req.params.id,
      { room1: room1 },
      { new: true, runValidators: true },

      { room2: room2 },
      { new: true, runValidators: true },

      { room3: room3 },
      { new: true, runValidators: true },

      { room4: room4 },
      { new: true, runValidators: true }
    );
    if (activateCategory) {
      return res.status(400).send({ message: " No Room category" });
    }
    res.send(activateCategory);
  } catch (error) {
    res.status(400).send({ message: error });
  }
};
