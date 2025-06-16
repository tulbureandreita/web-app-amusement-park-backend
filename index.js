const express = require("express");
const app = express();
const folderRoutes = require("./routes/folderRoutes");
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/photos", express.static("D:/AQUAPARK_PHOTOS"));

app.use("/api", folderRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
