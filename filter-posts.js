const sequelize=require('./config/database')
const {DataTypes}=require('sequelize')

const Post=require('./models/post')

async function filterPosts()
{
    await sequelize.sync()
    const posts=await Post.findAll({where:{title:'First Post'}})
    console.log('Filtered posts:', JSON.stringify(posts, null, 2))
    await sequelize.close()
}
filterPosts()