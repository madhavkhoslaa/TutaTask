import express, { Request, Response } from 'express';
import path from 'path';
const cors = require('cors');
const app = express();
app.use(express.static(__dirname+ '/public'));
app.use(cors());

// Define a route to serve your HTML file
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
