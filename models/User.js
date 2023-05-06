const mongoose = require('mongoose')
// const bcrypt = require('bcrypt-nodejs')
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

// userSchema.methods.hashPassword = (password) => {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
// } //signup

// userSchema.methods.comparePasswords = (password, hash) => {
//     return bcrypt.compareSync(password,hash)
// }
let User = mongoose.model('User', userSchema, 'users')
                    //object(model)          collection

module.exports = User //استعمال export من اجل اضافة واستدعاء المةدل في ملفات اخرى
