const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/student', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a User schema and model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User= mongoose.model('User', userSchema);

// Handle registration POST request
app.post('/studentregister', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already registered' });
    }

    // Create a new user
    const newUser = new User({
      name,
      email,
      password,
    });

    // Save the user to the database
    await newUser.save();
    res.status(200).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to register user' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// Handle login POST request
app.post('/studentlogin', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the email exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Email not found' });
    }

    // Compare the provided password with the stored password
    const isPasswordValid = password === user.password;
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to login' });
  }
});

