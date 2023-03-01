const Post = require("./schema");

const getPost = async (req, res) => {
  const posts = await Post.find();
  posts ? res.status(200).json(posts) : posts;
};

const setPost = async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error((message = "Please enter a text"));
  }
  const post = await Post.create({
    title: req.body.title,
    body: req.body.body,
    author: req.body.author,
  });
  res.status(200).json({ message: "Added Post", post });
};

const updatePost = async (req, res) => {
  const post = await Post.findById(req.params.id); //Finds a specific post by Id atribute

  if (!post) {
    res.status(400);
    throw new Error("Post not found");
  }
  const updatedPost = await Post.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      body: req.body.body,
      author: req.body.author,
    },
    { edited: true }
  );
  res.status(200).json({ message: "Updated Post:", updatedPost }); //Returns message and post object of updated post;
};

const deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(400);
    throw new Error("Post not found");
  }

  await Post.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "Deleted Post:", post });
};

module.exports = {
  getPost,
  deletePost,
  updatePost,
  setPost,
};
