const assert = require('assert');
const User = require('../models/user');

//Describes tests
describe("Saving records", function(){
  it("Saves a record to the database", function(done){

    var user = new User({
      name: 'Matthew',
    });

    user.save().then(function(){
      assert(user.isNew === false);
      done();
    });
  });
  //next test
});
