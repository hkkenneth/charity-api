module.exports = function() {
  var MongoClient = require('mongodb').MongoClient;
  var config = require('./config.js');
  var MONGO_URL = config.mongoUrl;

  return {
    save: function save(type, id, settings, callback) {
      MongoClient.connect(MONGO_URL, function(err, db) {
        if (err) {
          console.log('mongo connection error');
          throw err;
        }
        var collection = db.collection('subscription');
        var payload = {
          type: type,
          clientId: id,
          settings: settings
        };
        collection.update({clientId: id}, payload, {upsert: true, fullResult: true}, function(err, docs) {
          if (err) {
            console.log('mongo insertion error');
            throw err;
          }
          db.close();
          callback(docs);
        });
      });
    }
  }
}();
