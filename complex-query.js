const { Sequelize } = require('sequelize');
const sequelize = require("./config/database");
const { DataTypes } = require("sequelize");
const Post = require("./models/post");

async function complexQuery() {
    await sequelize.sync()
  
    const posts = await Post.findAll({
      where: {
        title: {
          [Sequelize.Op.like]: '%Post'
        }
      },
      order: [
        ['title', 'ASC']
      ],
      limit: 2,
      offset: 0
    })
    console.log('Complex query result:', JSON.stringify(posts, null, 2))
  
    await sequelize.close()
  }
  
  complexQuery()