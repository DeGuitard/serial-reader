var mongoose = require('mongoose'),
	autoIncrement = require('mongoose-auto-increment');

module.exports = function() {
   switch (this.env) {
    case 'development':
      mongoose.connect('mongodb://user:password@host/database');
      break;
    case 'production':
        mongoose.connect('mongodb://user:password@host/database');
      break;
  }
  autoIncrement.initialize(mongoose.connection);
}
