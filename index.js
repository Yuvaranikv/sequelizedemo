// Assuming you have imported the models
const User = require('./models/user')
const Post = require('./models/post');

// Define associations
User.hasMany(Post); // User can have many posts
Post.belongsTo(User); // Each post belongs to a single user

// Sync the models with the database
async function syncModels() {
  try {
    await sequelize.sync();
    console.log('Models were synchronized successfully.');
  } catch (error) {
    console.error('Error syncing models:', error);
  }
}

syncModels();
