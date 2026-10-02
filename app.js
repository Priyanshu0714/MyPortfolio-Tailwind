const express = require("express");
const path = require("path");
const fs = require("fs");
const mongoose = require("mongoose");
const projects = require("./data/projects");

const app = express();

mongoose.connect('mongodb+srv://priyanshu:Ppriyanshu%401407@priyanshucluster.kzr7x.mongodb.net/?retryWrites=true&w=majority&appName=PriyanshuCluster', {
  serverSelectionTimeoutMS: 10000,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
      message: 'Please provide a valid email address.'
    }
  },
  message: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now }
});
const Employee = mongoose.model("Employee", employeeSchema);

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index', { 
    projects,
    sent: req.query.sent === 'true'
  });
});

app.get('/pdfview', (req, res) => {
  res.render('pdfview');
});

// Returns project data or folder names
app.get("/projects", (req, res) => {
  if (req.query.format === 'names') {
    const projectDir = path.join(__dirname, 'public', 'projects');
    fs.readdir(projectDir, (err, folders) => {
      if (err) return res.status(500).send('Error reading project directory');
      res.json(folders);
    });
  } else {
    res.json(projects);
  }
});

// Support both GET and POST for GetInTouch
const handleContact = async (req, res) => {
  try {
    const name = req.body?.name || req.query?.name;
    const email = req.body?.email || req.query?.email;
    const message = req.body?.message || req.query?.message;

    if (!name || !email || !message) {
      if (req.xhr || req.headers.accept?.includes('json')) {
        return res.status(400).json({ success: false, error: 'All fields are required.' });
      }
      return res.redirect('/?error=missing#contact');
    }

    const employee = new Employee({ name, email, message });
    await employee.save();

    if (req.xhr || req.headers.accept?.includes('json')) {
      return res.json({ success: true, message: 'Message sent successfully! I will get back to you shortly.' });
    }
    res.redirect('/?sent=true#contact');
  } catch (err) {
    console.error('Contact form submission error:', err);
    // Extract a user-friendly validation error message if available
    const validationError = err?.errors?.email?.message || err?.errors?.name?.message || err?.errors?.message?.message;
    const errorMsg = validationError || 'Failed to record message. Please try again.';
    if (req.xhr || req.headers.accept?.includes('json')) {
      return res.status(400).json({ success: false, error: errorMsg });
    }
    res.redirect('/?error=failed#contact');
  }
};

app.get("/GetInTouch", handleContact);
app.post("/GetInTouch", handleContact);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Priyanshu's Portfolio server listening on port ${PORT}`);
});
