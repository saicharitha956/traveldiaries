const Story = require('../models/Story');

exports.addStory = async (req, res) => {
  try {
    const { title, date, description } = req.body;
    const image = req.file.filename;
    const newStory = new Story({ title, date, description, image });
    await newStory.save();
    res.status(201).json(newStory);
  } catch (error) {
    res.status(500).json({ message: 'Error saving story', error });
  }
};
