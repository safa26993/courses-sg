const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/cours',{ useNewUrlParser: true},)
.then(() => console.log('connected successfully'))
.catch((err) => {console.error(err); });

    
