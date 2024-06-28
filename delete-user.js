const sequelize = require('./config/database');
const User = require('./models/user');

async function deleteUser() {
    await sequelize.sync()
  
    const user = await User.findOne({ where: { email: 'john@example.com' } })
    if (user) {
      await user.destroy()
      console.log('User deleted')
    }
  
    await sequelize.close()
  }
  
  deleteUser()