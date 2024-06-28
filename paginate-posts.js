const sequelize = require("./config/database");
const { DataTypes } = require("sequelize");
const Post = require("./models/post");

async function paginatePosts() {
    await sequelize.sync()
  
    const posts = await Post.findAll({
      limit: 2,
      offset: 1
    })
    console.log('Paginated posts:', JSON.stringify(posts, null, 2))
  
    await sequelize.close()
  }
  
  paginatePosts()