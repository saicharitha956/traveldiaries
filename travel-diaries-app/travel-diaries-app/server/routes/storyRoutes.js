const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Story = require('../models/Story');

// Configure multer to store images in /uploads folder
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// POST route to add a story
router.post('/stories', upload.single('image'), async (req, res) => {
  try {
    const { title, description, date, location } = req.body;
    const image = req.file ? req.file.filename : null;

    const newStory = new Story({
      title,
      description,
      date,
      location,
      image
    });

    await newStory.save();
    res.status(201).json({ message: 'Story added successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add story' });
  }
});

// GET all stories
router.get('/stories', async (req, res) => {
  try {
    const stories = await Story.find().sort({ date: -1 });
    res.json(stories);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch stories' });
  }
});

// DELETE a story by ID
router.delete('/stories/:id', async (req, res) => {
  try {
    const story = await Story.findByIdAndDelete(req.params.id);
    if (!story) {
      return res.status(404).json({ message: 'Story not found' });
    }
    res.json({ message: 'Story deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete story' });
  }
});

module.exports = router;
