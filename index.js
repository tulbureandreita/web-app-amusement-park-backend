const express = require("express");
const app = express();
const path = require("path");
const folderRoutes = require("./routes/folderRoutes");
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const photosPath = path.resolve(__dirname, "../AQUAPARK_PHOTOS");
app.use("/photos", express.static(photosPath));

// const cameraRoute = require("./routes/camera");
// app.use("/camera", cameraRoute);

app.use("/api", folderRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
