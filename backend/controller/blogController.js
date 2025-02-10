const Blog = require("../models/blog");
const marked = require("marked");
const fs = require("fs");
const path = require("path");

exports.createBlog = async (req, res) => {
  try {
    const { title, category, tags, content, slug } = req.body;
    let description = "";

    if (req.file) {
      const filePath = path.join(__dirname, "..", "uploads", req.file.filename);
      const markdownContent = fs.readFileSync(filePath, "utf8");
      description = marked(markdownContent);
    }

    const blog = new Blog({
      title,
      category,
      tags,
      content,
      slug,
      description,
      mdFile: req.file?.filename,
    });
    await blog.save();

    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
