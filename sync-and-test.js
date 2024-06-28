const sequelize = require('./config/database');
const User = require('./models/user');
const Post = require('./models/post');

// Define associations
User.hasMany(Post, { foreignKey: 'userId' });
Post.belongsTo(User, { foreignKey: 'userId' });

async function syncAndTest() {
  try {
    await sequelize.sync({ force: true });
    console.log('Models synchronized successfully.');

    const user = await User.create({ name: 'john', email: 'john@example.com' });
    console.log('User created:', user.toJSON());

    const post = await Post.create({ title: 'First Post', content: 'This is my first post!', userId: user.id });
    console.log('Post created:', post.toJSON());

    const userWithPosts = await User.findOne({ where: { id: user.id }, include: Post });
    console.log('User with posts:', JSON.stringify(userWithPosts, null, 2));
  } catch (error) {
    console.error('Error syncing or testing models:', error);
  } finally {
    await sequelize.close();
  }
}

syncAndTest();
