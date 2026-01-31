const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const donorRoutes = require('./routes/donorRoutes');
const eventRoutes = require('./routes/eventRoutes');
const bloodBankRoutes = require('./routes/bloodBankRoutes');
const { insertSampleData, resetAndInsertSampleData } = require('./utils/sampleData');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: ["http://localhost:8080", "http://localhost:8081", "http://localhost:8082", "http://localhost:8084"],
    methods: ["GET", "POST"]
  }
});

// CORS configuration
app.use(cors({
  origin: ["http://localhost:8080", "http://localhost:8081", "http://localhost:8082", "http://localhost:8084"],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

// Store io instance on app
app.set('io', io);

// Middleware
app.use(express.json());

// Routes
app.use('/api/donors', donorRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/blood-banks', bloodBankRoutes);

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/blood_donation', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected');
  // Reset and insert sample data
  resetAndInsertSampleData().then(() => {
    console.log('✅ Sample data reset and insertion completed');
  });
})
.catch(err => console.error('MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
