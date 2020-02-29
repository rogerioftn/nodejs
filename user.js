const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('gestor', 'root', 'Easybus@2020', {
  host: 'localhost',
  dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});


class User extends Model {}
User.init({
  username: DataTypes.STRING,
  password : DataTypes.STRING,
  email : DataTypes.STRING,
  perfil :DataTypes.STRING,
  birthday: DataTypes.DATE
}, { sequelize, modelName: 'user' });

sequelize.sync()
  .then(() => User.create({
    username: 'bruno',
    password:'123dado',
    email:'bruno@email',
    perfil:'adminsitrador',
    birthday: new Date(1989, 10, 20)
  }))
  .then(user => {
    console.log(user.toJSON());
  });