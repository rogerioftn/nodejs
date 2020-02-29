const { Sequelize, DataTypes, Model } = require('sequelize');
const User = require("./models/user");
const db = require("./models/db")

User.create({username: 'Paulo b', senha:'123dado  ', email:'bruno@email', perfil:'adminsitrador', birthday: new Date(1988, 6, 20) }).then(paulo => {
  console.log("Jane's auto-generated ID:",  paulo);
});

