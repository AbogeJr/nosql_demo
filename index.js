const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { getPost, setPost, deletePost, updatePost } = require("./controllers");
dotenv.config();

// Initalizing the app
const app = express();

//Middleware for form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Port for the server
const port = 5000;

// Initialize router
const router = express.Router();

// MongoDB connection
mongoose
  .connect(
    `mongodb+srv://aj:${process.env.MONGO_PASSWORD}@cluster0.4emqylg.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(
    (response) => console.log("Connected to DB"),
    (err) => console.log("Some error")
  );

// Settng up Routes
router.route("/").get(getPost).post(setPost);
router.route("/:id").put(updatePost).delete(deletePost);

app.use(router);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
