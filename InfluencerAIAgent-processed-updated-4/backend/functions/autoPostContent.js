// Importing necessary dependencies
const axios = require('axios');

// Function to auto post content
const autoPostContent = async (req, res) => {
  try {
    // Validate request body
    if (!req.body.content) {
      return res.status(400).json({ error: 'Content to post is required.' });
    }

    // Post content to API
    const response = await axios.post('http://api.example.com/content', { content: req.body.content });

    // Return the results
    res.json(response.data);
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: 'An error occurred while auto posting content.' });
  }
};

module.exports = autoPostContent;