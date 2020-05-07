const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/teste', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = mongoose