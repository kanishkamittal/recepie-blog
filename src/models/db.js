const Sequelize = require('sequelize')
const DT = Sequelize.DataTypes

const db = new Sequelize(
  'recepiedb', 'recepieuser', 'recepiepass',
  {
    dialect: 'mysql',
    host: 'localhost',
    logging: false
  }
)

const User = db.define('user', {
  username: { type: DT.STRING(30), unique: true, allowNull: false },
  password: { type: DT.STRING, allowNull: true }
})

const Recepie = db.define('recepieTb', {
  name: {
    type: DT.STRING(150),
    allowNull: false
  },
  type: {
    type: DT.STRING(30),
    allowNull: true
  },
  ingredients: {
    type: DT.TEXT,
    allowNull: true
  },
  recepie: {
    type: DT.TEXT,
    allowNull: false
  }
  })

const Comment = db.define('comment', {
  title: {
    type: DT.STRING(150),
    allowNull: false
  },
  message: {
    type: DT.TEXT,
    allowNull:true
  }
})

Comment.belongsTo(Recepie)
Recepie.hasMany(Comment)

Comment.belongsTo(User)
User.hasMany(Comment)

module.exports = {
  db,
  Comment,
  Recepie,
  User
}