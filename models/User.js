const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

let User = mongoose.model('User', userSchema, 'users')
                    //object(model)          collection

module.exports = User //استعمال export من اجل اضافة واستدعاء المةدل في ملفات اخرى
