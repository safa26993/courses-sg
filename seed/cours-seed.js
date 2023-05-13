const db = require('../config/database')
const Cours = require('../models/Cours')


let newCourses = [
    new Cours({
        title: 'lesson one',
        content: 'Lorem ipsum dolor sit amet,',
        level: 'level one'
    }),
    new Cours({
        title: 'lesson twe',
        content: 'Lorem ipsum dolor sit amet,',
        level: 'level one'
    }),
    new Cours({
        title: 'lesson three',
        content: 'Lorem ipsum dolor sit amet,',
        level: 'level one'
    }),
    new Cours({
        title: 'lesson four',
        content: 'Lorem ipsum dolor sit amet,',
        level: 'level one'
    }),
    new Cours({
        title: 'Html',
        content: 'Lorem ipsum dolor sit amet,',
        level: 'level one'
    }),


]

newCourses.forEach((cours) => {
    cours.save((err) => {
        if (err) {
            console.log(err)
        }
    })
})