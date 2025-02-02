const express = require("express");
const cors = require("cors");
const faqRoutes = require("./routes/faqs");

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors()); 
app.use(express.json()); 


app.use("/api/faqs", faqRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
