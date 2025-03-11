const express = require("express");

require("dotenv").config();
const schoolRoutes = require("./routes/schoolRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
      API is running!<br>
      Use <code>/api/listSchools?latitude=28.7041&longitude=77.1025</code> to list all schools, sorted by latitude and longitude.
    `);
});

app.use("/api", schoolRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
