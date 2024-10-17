const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Log MongoDB URI to check if it's loaded correctly
console.log("Mongo URI:", process.env.MONGO_URI);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Define a schema for contact messages, specifying the collection name
const ContactMessageSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  subject: String,
  message: String,
}, { collection: 'contactuser' }); // Specify the collection name here

const ContactMessage = mongoose.model('ContactMessage', ContactMessageSchema);

// Route to handle contact form submissions
app.post('/api/contact', async (req, res) => {
  try {
    const contactMessage = new ContactMessage(req.body);
    await contactMessage.save();
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Example Route for fetching items (if needed)
app.get('/api/data', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
