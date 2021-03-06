'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    content: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    imgUrl: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    wine_id: DataTypes.INTEGER,
    winery_id: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User,{foreignKey: "user_id"})
    Review.belongsTo(models.Wine,{foreignKey: "wine_id"})
    Review.belongsTo(models.Winery, {foreignKey: "winery_id"})

  };
  return Review;
};
