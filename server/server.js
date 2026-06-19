const express = require("express");
const cors = require("cors");

const enquiryRoutes = require("./routes/enquiry");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/enquiry", enquiryRoutes);

app.get("/", (req, res) => {
  res.send("API Running...");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});