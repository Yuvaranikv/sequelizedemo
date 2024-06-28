const sequelize = require("./config/database");
const { DataTypes } = require("sequelize");
const Post = require("./models/post");

async function sortPosts() {
  await sequelize.sync();
  const posts = await Post.findAll({
    order: [["title", "ASC"]],
  })
  console.log('Sorted posts:', JSON.stringify(posts, null, 2))

  await sequelize.close()
}

sortPosts()