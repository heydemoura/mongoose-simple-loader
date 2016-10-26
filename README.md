# mongoose-simple-loader
Load mongoose models from a given directory dinamically.

This module will help you import all of your modules from a given directory, automatically, into your scripts. You will be able to access then as properties of the returned object.

# Requirements
Mongoose
NodeJS >= 4.6.0

# Installation & Use
To install, go with the regular:
```
npm install mongoose-model-loaded
```
### Usage

Require the module passing the first argument as your models directoty, and then pass your connection string through the .connect() method.
```javascript
// Load your models
var db = require('mongoose-model-loader')(__dirname + '/../models_directory/');

// Connect to Database
// Just an alias for mongoose.connect()
db.connect(uri, options);

db.My_model().find().then(function(item) {
  // Do stuff
});
```

Your models will me loaded as properties of the module object, named after the respective filename. 

Eg.:

| Filename      | Model          |
| ------------- |:--------------:|
| Users.js      | db.Users.js    |
| TB_Users.js   | db.TB_Users.js |

I hope you got the idea.

### Share your love!
Feel free to send any kind of feedback.
