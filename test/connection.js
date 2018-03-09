const mongoose = require('mongoose');

//ES6 Promise
mongoose.Promise = global.Promise;

//Connect to mongoDB before tests run
before(function(done){

  //connect to mongodb
  mongoose.connect('mongodb://localhost/test');
  mongoose.connection.once('open', function(){
    console.log("Connection has been made ...");
    done();
  }).on('error', function(error){
    console.log('Connection Error', error);
  });
});
