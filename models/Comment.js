const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
  
  CommentBody: {
    type: DataTypes.STRING,

  }
  },
  {
    sequelize
    
  }
);

module.exports = Comment;
