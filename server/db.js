var faker = require('faker');
var _ = require('lodash');

module.exports = function() {
  var data = {
    categories: [],
    posts: [],
  };

  // Create categories
  for (var i = 1; i <= 3; i++) {
    data.categories.push({
      id: i,
      name: faker.random.arrayElement(["Education","Meal","Clothing","Travel"])
    });
  }

  // Create posts
  for (var i = 1; i <= 5; i++) {
    data.posts.push({
      id: i,
      category_id: _.shuffle(data.categories)[0].id,
        category: _.shuffle(data.categories)[0].name,
        amount: faker.random.number({min:200, max:1000}),
        date: faker.date.between('2017-05-01', '2017-09-31'),
      description: faker.lorem.sentence().slice(0,-1),
      type: faker.random.arrayElement(["income","outcome"]) //returns "two"

  });
  }

  return data;
}();
