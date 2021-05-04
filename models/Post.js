const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
   postTitle: {
     type: DataTypes.STRING,

   },
  postBody: {
    type: DataTypes.STRING,

  }
  },
  {
    sequelize
    
  }
);

module.exports = Post;
