const express = require("express");
const app = express();

require("dotenv").config();

// Middleware
app.use(express.json());

// Connect to the database
const connectDB = require("./config/connectDB");
connectDB();

// Import routes
// const userRoutes = require("./routes/userlogin");
// const adminRoutes = require("./routes/admin");
// const announcementRoutes = require("./routes/announcement");

// Use routes
app.use("/api/user", require('./routes/userlogin'));
// app.use("/api/admin", adminRoutes);
// app.use("/api/announcement", announcementRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Server Error");
});

const PORT = process.env.PORT || 2504;

app.listen(PORT, error => {
    if (error) {
        console.error(`Failed to connect to server!!! ${error}`);
    } else {
        console.log(`Server running on port ${PORT} ...`);
    }
});


