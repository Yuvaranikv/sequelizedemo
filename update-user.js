const sequelize = require('./config/database');
const User = require('./models/user');

async function updateUser(){
    await sequelize.sync()
    const user=await User.findOne({where:{email:'john@example.com'}})
    if(user){
        user.name='Janse Smith'
        await user.save()
         console.log('User updated:', user.toJSON())
  }

  await sequelize.close()
}

updateUser()