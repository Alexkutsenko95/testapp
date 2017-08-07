var faker = require('faker');
var _ = require('lodash');

module.exports = function() {
  var data = {
    authors: [],
    posts: [],
  };

  // Create categories
  for (var i = 1; i <= 3; i++) {
    data.authors.push({
      id: i,
      name: faker.random.arrayElement(["Stephen King","Marc Levy","Bella Forrest","James Patterson"])
    });
  }

  // Create posts
  for (var i = 1; i <= 5; i++) {
    data.posts.push({
      id: i,
        authors_id: _.shuffle(data.authors)[0].id,
        authors: _.shuffle(data.authors)[0].name,
        // amount: faker.random.number({min:200, max:1000}),
        date: faker.date.between('2017-05-01', '2017-09-31'),
      title: faker.lorem.sentence().slice(0,-1),
      // type: faker.random.arrayElement(["income","outcome"]) //returns "two"

  });
  }

  return data;
}();
