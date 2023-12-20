const express = require('express');
const app = express();
const cors = require('cors');

// Import models
const UserProfile = require('../../models/UserProfile');
const BrandCollaboration = require('../../models/BrandCollaboration');
const ContentIdea = require('../../models/ContentIdea');

// Middleware
app.use(cors());
app.use(express.json());

// Define routes
app.get('/api/user-profiles', async (req, res) => {
  try {
    const profiles = await UserProfile.find();
    res.json(profiles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/brand-collaborations', async (req, res) => {
  try {
    const collaborations = await BrandCollaboration.find();
    res.json(collaborations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/content-ideas', async (req, res) => {
  try {
    const ideas = await ContentIdea.find();
    res.json(ideas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ... define other routes

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});