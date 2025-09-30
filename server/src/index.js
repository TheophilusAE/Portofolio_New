import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the 'public' directory
app.use('/public', express.static(path.join(__dirname, '../public')));

// Route to download CV
app.get('/api/download-cv', (req, res) => {
  const cvPath = path.join(__dirname, '../public/cv.pdf');
  res.download(cvPath, 'TheophilusAE_CV.pdf', (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file.",
        error: err,
      });
    }
  });
});

// Route to get basic information
app.get('/api/info', (req, res) => {
  const info = {
    name: "Theophilus Alexander Elvan",
    title: "Full Stack Developer",
    email: "theophilus.a.e.k@gmail.com",
    location: "Indonesia",
    social: {
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername",
    }
  };
  res.json(info);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});