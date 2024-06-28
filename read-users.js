const sequelize = require('./config/database');
const User = require('./models/user');


async function readUsers()
{
   // await sequelize.sync()
    const users=await User.findAll()
    console.log('All users:', JSON.stringify(users, null, 2))
    await sequelize.close()

}
readUsers()