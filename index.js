const express = require("express");
const { dbConn } = require("./config");
const dotenv = require("dotenv");
const { getPost, setPost, deletePost, updatePost } = require("./controllers");
// dotenv.config();

dbConn();
// Initalizing the app
const app = express();

//Middleware for form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Port for the server
const port = 5000;

// Initialize router
const router = express.Router();

// Settng up Routes
router.route("/").get(getPost).post(setPost);
router.route("/:id").put(updatePost).delete(deletePost);

app.use(router);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
